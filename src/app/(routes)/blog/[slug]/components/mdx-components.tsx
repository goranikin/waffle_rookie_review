import { cn } from '@/lib/utils';
import * as runtime from 'react/jsx-runtime';

type Props = {
  code: string;
};

const components = {
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a target="_blank" rel="noopener" {...props} className={cn([className, 'text-primary'])} />
  ),
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

export function MdxComponents({ code }: Props) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose prose-slate dark:prose-invert flex-1">
      <Component components={components} />
    </div>
  );
}
