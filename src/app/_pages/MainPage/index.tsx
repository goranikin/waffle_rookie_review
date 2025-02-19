'use client'

import { useRouter } from 'next/navigation';

export const MainPage = () => {
  const router = useRouter();
  return (
    <div>
      <p>메인페이지 입니다.</p>
      <button type="button" onClick={()=> router.push('/')}>랜딩페이지로 이동</button>
    </div>
  );
};
