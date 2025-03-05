import { type Post } from '@/util/post';
import Link from 'next/link';

export const PostList = ({ postList }: { postList: Post[] }) => {
  return (
    <ol>
      {postList.map(({ slug, title, publishDate }) => (
        <li key={slug}>
          <h2>
            <Link href={`/${slug}`}>{title}</Link>
          </h2>
          <p>
            <strong>Published:</strong> {new Date(publishDate).toLocaleDateString()} <strong>Categories:</strong>{' '}
          </p>
        </li>
      ))}
    </ol>
  );
};
