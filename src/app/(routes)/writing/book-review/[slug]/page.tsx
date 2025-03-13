import { getPostBySlug } from '@/utils/post';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/pageLayout';
import PostPageLayout from '@/components/postPageLayout';
import { bookReview } from '#site/contents';
import { Metadata } from 'next';
import metadata from '@/utils/metadata';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PersonalEssayPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug({ slug: slug, category: 'writing/book-review' });

  if (!post) {
    notFound();
  }

  return (
    <PageLayout>
      <PostPageLayout post={post} />
    </PageLayout>
  );
}

export function generateStaticParams() {
  return bookReview.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = bookReview.find((post) => post.slug === params.slug);

  if (!post) {
    return {};
  }

  return metadata({
    title: post.title,
    description: post.description,
    path: post.permalink,
    publishDate: post.publishDate,
    image: post.thumbnailUrl,
  });
}
