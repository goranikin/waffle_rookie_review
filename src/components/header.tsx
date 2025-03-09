'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { Nav } from '@/components/nav';
import { useRouter } from 'next/navigation';
import MobileNav from './mobile-nav';

export const Header = () => {
  return (
    <header className="h-14 px-5 sticky top-0 z-50 w-full border-b flex justify-evenly items-center bg-background gap-5">
      <div className="flex items-center gap-5">
        <HomeLogo />
        <BackButton />
      </div>
      <div className="flex grow items-center">
        <div className="hidden sm:flex flex-1 justify-center">
          <Nav />
        </div>
        <div className="ml-auto flex items-center sm:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

const HomeLogo = () => {
  return (
    <Link href="/" className="font-extrabold">
      <Button type="button" variant="outline" size="icon" className="rounded-full">
        <Home className="h-5 w-5 transition-all text-primary stroke-1" />
      </Button>
    </Link>
  );
};

const BackButton = () => {
  const router = useRouter(); // 라우터 인스턴스 생성

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={() => router.back()} // 뒤로가기 기능 추가
    >
      <ArrowLeft className="h-5 w-5 transition-all text-primary stroke-1" />
    </Button>
  );
};
