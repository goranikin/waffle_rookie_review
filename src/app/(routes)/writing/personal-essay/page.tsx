import PageLayout from '@/components/pageLayout';
import PostList from '@/components/postList';
import { personalEssay } from '#site/contents';

export default function PersonalEssayListPage() {
  return (
    <PageLayout title="삶의 기록" description="삶의 무의미를 위한 공간">
      <PostList posts={personalEssay} basePath="/writing/personal-essay" />
    </PageLayout>
  );
}
