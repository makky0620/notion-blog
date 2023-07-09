import {Page, BlockResponse, PageReponse} from "@/src/types/notion";
import {getBlocks} from "./blocks";
import {client} from "./client"

export const getPage = async (pageId: string): Promise<Page> => {
  const { properties } = await client.pages.retrieve({
    page_id: pageId,
  }) as PageReponse;

  if (properties.Title.type !== 'title'){
    throw new Error('Title is not title');
  }

  const blocks = (await getBlocks(pageId)) as BlockResponse[];

  return {
    title: properties.Title.title[0].plain_text,
    blocks: blocks
  };
};



