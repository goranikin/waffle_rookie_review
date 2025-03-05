import { getPostBySlug, getPostList } from '@/util/post';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  const postList = await getPostList();
  const slug = params.slug;
  const post = getPostBySlug({ slug, postList });

  if (!post) {
    notFound();
  }

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.publishDate}</p>
    </div>
  );
}
