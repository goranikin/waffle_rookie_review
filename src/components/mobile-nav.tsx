'use client';

import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { NavItem, navs } from './nav';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="sm:hidden flex items-center gap-2 px-3 py-2">
          <MenuIcon className="h-4 w-4 text-primary" />
          <span className="">메뉴</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetTitle className="font-bold text-3xl mb-10">메뉴</SheetTitle>
        <div className="flex flex-col gap-2">
          {navs.map(({ href, label }) => (
            <NavItem
              href={href}
              label={label}
              key={label}
              onClick={() => {
                setOpen(false);
              }}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
