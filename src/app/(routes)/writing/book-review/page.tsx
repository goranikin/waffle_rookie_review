import PageLayout from '@/components/pageLayout';
import PostList from '@/components/postList';
import { bookReview } from '#site/contents';

export default async function PersonalEssayListPage() {
  return (
    <PageLayout title="책 정리" description="실용적인 서적을 읽고 정리하는 공간">
      <PostList posts={bookReview} basePath="/writing/book-review" />
    </PageLayout>
  );
}
