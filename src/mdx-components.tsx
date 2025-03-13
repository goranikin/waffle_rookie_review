// components/MDXContent.tsx
import * as runtime from 'react/jsx-runtime';

// MDX 코드 문자열을 React 컴포넌트로 변환하는 함수
const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export const MDXContent = ({ code, components = {} }: MDXProps) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};
