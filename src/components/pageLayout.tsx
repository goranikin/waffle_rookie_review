import { cn } from '@/utils/cn';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export default function PageLayout({ children, title, description, className }: PageLayoutProps) {
  return (
    <div className={cn(['px-5 pt-7 pb-16 flex flex-col gap-5', className])}>
      {(title || description) && (
        <div className="flex flex-col gap-2">
          {title && (
            <h1 className="text-5xl font-extrabold text-primary break-all tracking-tighter">{title.toUpperCase()}</h1>
          )}
          {description && <span className="text-primary font-medium">{description}</span>}
        </div>
      )}

      {children}
    </div>
  );
}
