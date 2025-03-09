import PageLayout from '@/components/pageLayout';
import Link from 'next/link';

export default function WritingPage() {
  return (
    <PageLayout title="Writing" description="개인적인 글을 남기는 공간">
      <Link href="/writing/personal-essay">개인 에세이</Link>
      <Link href="/writing/book-review">책 리뷰</Link>
    </PageLayout>
  );
}
