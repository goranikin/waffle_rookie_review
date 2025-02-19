"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <p>랜딩페이지 입니다.</p>
      <button type="button" onClick={() => router.push("/main")}>
        메인페이지로 이동
      </button>
    </div>
  );
}
