import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Block from '../components/Block';
import Container from '../components/Container';
import { getPage } from '../libs/notion/pages';
import { getPosts } from '../libs/notion/posts';
import type { Page } from '../types/notion';

type Props = {
  page: Page;
};

const Post: NextPage<Props> = ({ page }) => {
  return (
    <Container>
      <h1>{page.title}</h1>
      <article>
        {page.blocks.map((block: BlockObjectResponse, index: number) => (
          <Block key={`block-${index}`} block={block} />
        ))}
      </article>
    </Container>
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

  return {
    props: {
      page: page,
    },
  };
};

export default Post;
