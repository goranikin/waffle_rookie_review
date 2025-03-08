import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Hyeok-Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-screen-md min-w-[320px] mx-auto">
        <main className="flex flex-col">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
