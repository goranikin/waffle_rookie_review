import { BASE_URL } from '@/constants/network';
import { Metadata } from 'next';

type MetadataProps = {
  title: string;
  description: string;
  path: string;
  publishDate: string;
  image?: string;
};

const defaultImage = '/itisme.png';

export default function metadata(props: MetadataProps): Metadata {
  const { title, description: desc, path, image } = props;
  const description = `${desc} | 큰제비갈매기의 이야기, hyeok12053.dev`;

  const images = BASE_URL + (image ?? defaultImage);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: BASE_URL + path,
      siteName: 'miryang.dev',
      images,
      locale: 'ko_KR',
    },
  };
}
