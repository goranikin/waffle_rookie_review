import rehypeShiki from '@shikijs/rehype';
import { defineConfig, s } from 'velite';

export default defineConfig({
  root: 'src/contents',
  output: {
    data: '.velite', // 생성된 데이터가 저장될 위치
    assets: 'public/static', // 에셋 파일이 복사될 위치
    base: '/static/', // 에셋 파일의 기본 URL 경로
    name: '[name]-[hash:8].[ext]', // 에셋 파일 이름 포맷
    clean: true, // 빌드 전 출력 디렉토리 정리
  },
  collections: {
    development: {
      name: 'Development',
      pattern: 'development/**/*.mdx',
      schema: s
        .object({
          title: s.string(),
          description: s.string(),
          slug: s.path(),
          publishDate: s.string().date(),
          thumbnailUrl: s.string().optional(),
          content: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/${data.slug}`,
          slug: data.slug.replaceAll('development/', ''),
        })),
    },
    bookReview: {
      name: 'BookReview',
      pattern: 'writing/book-review/**/*.mdx',
      schema: s
        .object({
          title: s.string(),
          description: s.string(),
          slug: s.path(),
          publishDate: s.string().date(),
          thumbnailUrl: s.string().optional(),
          content: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/${data.slug}`,
          slug: data.slug.replaceAll('writing/book-review/', ''),
        })),
    },
    // personal-essay 폴더 내 MDX 파일 처리
    personalEssay: {
      name: 'PersonalEssay',
      pattern: 'writing/personal-essay/**/*.mdx',
      schema: s
        .object({
          title: s.string(),
          description: s.string(),
          slug: s.path(),
          publishDate: s.string().date(),
          thumbnailUrl: s.string().optional(),
          content: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/${data.slug}`,
          slug: data.slug.replaceAll('writing/personal-essay/', ''),
        })),
    },
  },
  mdx: {
    rehypePlugins: [[rehypeShiki, { theme: 'nord' }]],
  },
});
