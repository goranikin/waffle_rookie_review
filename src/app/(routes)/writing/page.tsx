import PageLayout from '@/components/pageLayout';
import Link from 'next/link';

export default function WritingPage() {
  return (
    <PageLayout title="글" description="개인적인 글을 남기는 공간">
      <div className="flex flex-col gap-4 mt-6">
        <Link
          href="/writing/personal-essay"
          className="px-6 py-4 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-lg font-medium flex items-center justify-between"
        >
          <span>개인 에세이</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <Link
          href="/writing/book-review"
          className="px-6 py-4 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-lg font-medium flex items-center justify-between"
        >
          <span>책 리뷰</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </PageLayout>
  );
}
