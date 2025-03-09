import { getPostBySlug } from '@/utils/post';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/pageLayout';
import PostPageLayout from '@/components/postPageLayout';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DevelopmentPage({ params }: Props) {
  const slug = (await params).slug;

  const post = await getPostBySlug({ slug, dataPath: 'development' });

  if (!post) {
    notFound();
  }

  return (
    <PageLayout>
      <PostPageLayout post={post} />
    </PageLayout>
  );
}
