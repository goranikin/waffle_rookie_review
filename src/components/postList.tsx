import { Post } from '@/utils/post';
import Link from 'next/link';

interface PostListProps {
  posts: Post[];
  basePath: string; // 이동할 기본 경로 (예: '/development', '/writing/book-review')
}

export default function PostList({ posts, basePath }: PostListProps) {
  return (
    <div>
      {posts
        .sort((a, b) => Number(new Date(b.publishDate)) - Number(new Date(a.publishDate)))
        .map((post: Post) => {
          const date = new Date(post.publishDate);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();

          return (
            <Link
              href={`${basePath}/${post.slug}`}
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
  );
}
