import { development, bookReview, personalEssay } from '#site/contents';

export type Post = {
  permalink: string;
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  content: string;
  thumbnailUrl?: string;
};

export const getPostBySlug = ({ slug, category }: { slug: string; category: string }): Post | undefined => {
  let posts: Post[];

  switch (category) {
    case 'development':
      posts = development;
      break;
    case 'writing/book-review':
      posts = bookReview;
      break;
    case 'writing/personal-essay':
      posts = personalEssay;
      break;
    default:
      posts = [];
  }

  return posts.find((post) => post.slug === slug);
};
