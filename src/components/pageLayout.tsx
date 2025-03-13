<<<<<<< Updated upstream
import { cn } from '@/utils/cn';

interface PageLayoutProps {
=======
type PageLayoutProps = {
>>>>>>> Stashed changes
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
<<<<<<< Updated upstream
}

export default function PageLayout({ children, title, description, className }: PageLayoutProps) {
  return (
    <div className={cn(['px-5 pt-7 pb-16 flex flex-col gap-5', className])}>
      {(title || description) && (
        <div className="flex flex-col gap-2 border-b pb-4">
          {title && (
            <h1 className="text-4xl font-bold text-primary break-all tracking-tighter">{title.toUpperCase()}</h1>
          )}
          {description && <span className="text-primary text-xl">{description}</span>}
        </div>
      )}

      {children}
    </div>
  );
}
=======
};

export const PageLayout = ({ children, title, description, className }: PageLayoutProps) => {
  
  return (
    <div>
      {(title || description) && (
        <div>
          {title && (
            <h1>{title.toUpperCase()}</h1>
          )}
          {description && (
            <span>{description}</span>
          )}
        </div>
      )}
      
      {children}
    </div>
  )
};
>>>>>>> Stashed changes
