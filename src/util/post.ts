import { readdir } from 'node:fs/promises';

export type Post = {
  slug: string;
  title: string;
  publishDate: string;
};

export const getPostList = async (): Promise<Post[]> => {
  const slugs = (await readdir('src/app/contents/blog', { withFileTypes: true })).filter((dirent) =>
    dirent.isDirectory(),
  );

  const postList = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`@/app/contents/blog/${name}/page.mdx`);
      return { slug: name, ...metadata };
    }),
  );

  postList.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return postList;
};
