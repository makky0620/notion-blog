import {client} from "./client";

export const getBlocks = async (
  pageId: string
) => {
  const blockId = pageId.replaceAll("-", "");

  // TODO: 全部の文章をとってこれるようにする
  const { results } = await client.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  });

  return results;
};
