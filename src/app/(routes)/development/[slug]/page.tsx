import { getPostBySlug } from '@/utils/post';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/pageLayout';
import PostPageLayout from '@/components/postPageLayout';
import { development } from '#site/contents';
import { Metadata } from 'next';
import metadata from '@/utils/metadata';

type Props = {
  params: { slug: string };
};

export default function DevelopmentPage({ params }: Props) {
  const { slug } = params;
  const post = getPostBySlug({ slug: slug, category: 'development' });

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
  return development.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = development.find((post) => post.slug === params.slug);

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
