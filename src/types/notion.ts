import {
  BlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export type Post = {
  id: string;
  title: string;
  slug: string;
  date: string;
  thumbnail: string;
};

export type Page = {
  title: string;
  date?: string;
  blocks: BlockObjectResponse[];
};
