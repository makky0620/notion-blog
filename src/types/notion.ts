import {BlockObjectResponse, ListBlockChildrenResponse, PageObjectResponse, PartialBlockObjectResponse, RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export type Post = {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: string;
};

export type Page = {
  title: string,
  blocks:BlockResponse[] 
};


export type PageReponse = PageObjectResponse;
export type BlockResponse = BlockObjectResponse;
export type RichTextResponse = RichTextItemResponse;

