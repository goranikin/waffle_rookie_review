import { getPostBySlug } from '@/utils/post';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/pageLayout';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const slug = (await params).slug;

  const post = await getPostBySlug({ slug });

  if (!post) {
    notFound();
  }

  return (
    <PageLayout>
      <div className="flex flex-col mt-5 gap-10">
        <h1 className="text-5xl font-black whitespace-pre-wrap">{post.title}</h1>
        <div className="prose max-w-full">
          <post.content />
        </div>
      </div>
    </PageLayout>
  );
}
