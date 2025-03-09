import { getPostList } from '@/utils/post';
import PageLayout from '@/components/pageLayout';
import PostList from '@/components/postList';

export default async function DevelopmentListPage() {
  const postList = await getPostList({ dataPath: 'development' });

  return (
    <PageLayout title="개발" description="개발 기록을 위한 공간">
      <PostList posts={postList} basePath="/development" />
    </PageLayout>
  );
}
