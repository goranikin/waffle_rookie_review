'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type PostResponse = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type PostListResponse = PostResponse[];

export default function Home() {
  const router = useRouter();

  const [postList, setPostList] = useState<PostListResponse>();

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => setPostList(data))
    .catch((error) => console.log(error));

  if (postList === undefined || postList === null) {
    return <div>아무튼 실패.</div>;
  }

  return (
    <div>
      <p>랜딩페이지 입니다.</p>
      <button type="button" onClick={() => router.push('/main')}>
        메인페이지로 이동
      </button>
      <button type="button" onClick={() => router.push('/test')}>
        테스트페이지로 이동
      </button>
      <p>테스트메시지!</p>
      <div>
        {postList.map((post) => {
          return (
            <div key={post.id}>
              <p>글 번호: {post.id}</p>
              <p>제목: {post.title}</p>
              <p>내용: {post.body}</p>
              <p>유저 번호: {post.userId}</p>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
