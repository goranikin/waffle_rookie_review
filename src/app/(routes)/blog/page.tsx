import { getPostList, Post } from '@/util/post';
import PageLayout from '@/components/pageLayout';
import Link from 'next/link';

export default async function BlogListPage() {
  const postList = await getPostList();

  return (
    <PageLayout title="Blog" description="개발 기록을 위한 공간">
      <div>
        {postList.map((post: Post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="flex py-5 items-center justify-between gap-2 border-b last:border-none"
          >
            <div className="flex flex-col gap-1 flex-1">
              <span className="font-semibold text-lg break-all line-clamp-2">{post.title}</span>
              <span className="break-all">{post.description}</span>
              <time className="text-xs mt-1">{post.publishDate}</time>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
