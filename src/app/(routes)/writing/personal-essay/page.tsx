import { getPostList } from '@/utils/post';
import PageLayout from '@/components/pageLayout';
import PostList from '@/components/postList';

export default async function PersonalEssayListPage() {
  const postList = await getPostList({ dataPath: 'writing/personal-essay' });

  return (
    <PageLayout title="삶의 기록" description="삶의 무의미를 위한 공간">
      <PostList posts={postList} basePath="/writing/personal-essay" />
    </PageLayout>
  );
}
