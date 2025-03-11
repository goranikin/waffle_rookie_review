import { getPostList } from '@/utils/post';
import PageLayout from '@/components/pageLayout';
import PostList from '@/components/postList';

export default async function PersonalEssayListPage() {
  const postList = await getPostList({ dataPath: 'writing/book-review' });

  return (
    <PageLayout title="책 정리" description="실용적인 서적을 읽고 정리하는 공간">
      <PostList posts={postList} basePath="/writing/book-review" />
    </PageLayout>
  );
}
