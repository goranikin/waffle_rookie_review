import { MDXContent } from '@/mdx-components';
import { Post } from '@/utils/post';

type Props = {
  post: Post;
};

const PostPageLayout = (props: Props) => {
  return (
    <div className="flex flex-col mt-5 gap-10">
      <h1 className="text-4xl font-black whitespace-pre-wrap">{props.post.title}</h1>
      <div className="prose max-w-full">
        <MDXContent code={props.post.content} />
      </div>
    </div>
  );
};

export default PostPageLayout;
