'use client';

import Link from 'next/link';
import { cn } from '@/utils/cn';
import { ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

type Nav = {
  href: string;
  label: string;
  external?: boolean;
};

export const navs = [
  {
    href: '/development',
    label: 'Development',
  },
  {
    href: '/writing',
    label: 'Writing',
  },
  {
    href: '/resume',
    label: 'Resume',
  },
  {
    href: '/guestbook',
    label: 'Guestbook',
  },
];

export const Nav = () => {
  return (
    <nav className="sm:flex hidden items-center space-x-6 text-lg font-medium gap-2">
      {navs.map((nav) => (
        <NavItem key={nav.label} {...nav} />
      ))}
    </nav>
  );
};

export function NavItem({ href, label, external, onClick }: Nav & { onClick?: () => void }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:font-black py-3 text-primary font-bold flex items-center',
        pathname?.startsWith(href) && 'underline underline-offset-4 font-black',
      )}
      target={external ? '_blank' : undefined}
      onClick={onClick}
    >
      {label.toUpperCase()}
      {external && <ArrowUpRight className="h-4 w-4" />}
    </Link>
  );
}
