import { getPostList, Post } from '@/utils/post';
import PageLayout from '@/components/pageLayout';
import Link from 'next/link';

export default async function BlogListPage() {
  const postList = await getPostList();

  return (
    <PageLayout title="블로그" description="개발 기록을 위한 공간">
      <div>
        {postList.map((post: Post) => {
          const date = new Date(post.publishDate);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          return (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="flex py-5 items-center justify-between gap-2 border-b last:border-none"
            >
              <div className="flex flex-col gap-1 flex-1">
                <span className="font-semibold text-lg break-all line-clamp-2">{post.title}</span>
                <span className="break-all">{post.description}</span>
                <time className="text-xs mt-1">
                  {year}.{month}.{day}
                </time>
              </div>
            </Link>
          );
        })}
      </div>
    </PageLayout>
  );
}
