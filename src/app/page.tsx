import PageLayout from '@/components/pageLayout';
import Image from 'next/image';

export default function Home() {
  return (
    <PageLayout>
      <Image alt="큰제비갈매기" src="/itisme.png" width={300} height={500} className="self-center" />
      <p>개인 블로그 사이트입니다!</p>
      <p>여기는 텅텅이니 위의 &lsquo;개발&lsquo; 이나 &lsquo;글&lsquo; 버튼을 눌러보세요.</p>
      <p>(모바일은 우측 상단 menu 버튼을 누르세요!)</p>
    </PageLayout>
  );
}
