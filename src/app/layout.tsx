import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: "Hyeok's Blog",
  icons: {
    icon: '/itisme.png',
  },
};

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.className}`}>
      <body className="max-w-screen-md min-w-[320px] mx-auto">
        <main className="flex flex-col">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
