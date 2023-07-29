import {
  BlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export type Post = {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: string;
};

export type Page = {
  title: string;
  blocks: BlockObjectResponse[];
};
