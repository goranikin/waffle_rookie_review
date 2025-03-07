import { readdir } from 'node:fs/promises';

export type Post = {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  content: React.ComponentType;
};

export const getPostList = async (): Promise<Post[]> => {
  const postDataDirectoryPath = 'src/app/contents/blog';

  const fileList = (await readdir(postDataDirectoryPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isFile() && dirent.name.endsWith('.mdx'),
  );

  const postList = await Promise.all(
    fileList.map(async (file) => {
      const slug = file.name.replace(/\.mdx$/, '');
      const { metadata } = await import(`@/app/contents/blog/${file.name}`);
      return { slug, ...metadata };
    }),
  );

  postList.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return postList;
};

export const getPostBySlug: ({ slug }: { slug: string }) => Promise<Post> = async ({ slug }: { slug: string }) => {
  const postDataDirectoryPath = 'src/app/contents/blog';
  const file = (await readdir(postDataDirectoryPath, { withFileTypes: true })).find(
    (dirent) => dirent.isFile() && dirent.name === `${slug}.mdx`,
  );
  if (!file) throw new Error('No post found for slug');

  const { default: Content, metadata } = await import(`@/app/contents/blog/${file.name}`);

  return {
    slug,
    content: Content,
    ...metadata,
  };
};
