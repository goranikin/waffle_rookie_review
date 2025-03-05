import { readdir } from 'node:fs/promises';

export type Post = {
  slug: string;
  title: string;
  publishDate: string;
};

export const getPostList = async (): Promise<Post[]> => {
  const fileList = (await readdir('src/app/contents/blog', { withFileTypes: true })).filter(
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

export const getPostBySlug = ({ slug, postList }: { slug: string; postList: Post[] }) => {
  return postList.find((post) => post.slug === slug);
};
