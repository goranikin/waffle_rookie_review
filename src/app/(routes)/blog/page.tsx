import { getPostList } from '@/util/post';
import { PostList } from '@/components/postList';

export default async function BlogListPage() {
  const postLIst = await getPostList();

  return (
    <main>
      <h1>Next.js MDX Blog</h1>
      <PostList postList={postLIst} />
    </main>
  );
}
