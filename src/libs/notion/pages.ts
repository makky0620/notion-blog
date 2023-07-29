import { Page } from '@/src/types/notion';
import {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { getBlocks } from './blocks';
import { client } from './client';

export const getPage = async (pageId: string): Promise<Page> => {
  const { properties } = (await client.pages.retrieve({
    page_id: pageId,
  })) as PageObjectResponse;

  if (properties.Title.type !== 'title') {
    throw new Error('Title is not title');
  }

  const blocks = (await getBlocks(pageId)) as BlockObjectResponse[];

  return {
    title: properties.Title.title[0].plain_text,
    blocks: blocks,
  };
};
