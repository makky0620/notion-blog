import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Block from '../components/Block';
import { getPage } from '../libs/notion/pages';
import { getPosts } from '../libs/notion/posts';
import { setOgp } from '../libs/ogp';
import type { Page } from '../types/notion';

type Props = {
  page: Page;
};

const Post: NextPage<Props> = ({ page }) => {
  return (
    <div className='mx-auto my-10 px-10 font-sans'>
      <h1 className='text-5xl font-medium leading-[67.2px]'>{page.title}</h1>
      <div className='text-sm font-normal'>{page.date && page.date}</div>
      <hr className='my-10 border border-inherit' />
      <article>
        {page.blocks.map((block: BlockObjectResponse, index: number) => (
          <Block key={`block-${index}`} block={block} />
        ))}
      </article>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  return {
    paths: posts.map((p) => ({ params: { id: p.id } })),
    fallback: true,
  };
};

type Params = {
  id: string;
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { id } = params as Params;
  const page = await getPage(id);
  const blocksWithOgp = await setOgp(page.blocks);

  return {
    props: {
      page: {
        title: page.title,
        date: page.date,
        blocks: blocksWithOgp,
      },
    },
  };
};

export default Post;
