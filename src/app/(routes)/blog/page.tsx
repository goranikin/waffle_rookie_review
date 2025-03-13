import { getPostList } from '@/util/post';
import { PostList } from '@/components/postList';
import {PageLayout} from "@/components/pageLayout";
import Link from "next/link";

export default async function BlogListPage() {
  const postLIst = await getPostList();
  
  return (
    <PageLayout title="Blog" description="개발 기록을 남기는 공간">
      <div>
        {postLIst.map((post) => (
          <Link
            href={`blog/${post.slug}`}
          >
            <div>
            
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
