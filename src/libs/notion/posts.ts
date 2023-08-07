import { Post } from '@/src/types/notion';
import {
  GetPageResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { client } from './client';

export const getPosts = async (): Promise<Post[]> => {
  const database_id = process.env.NOTION_DATABASE_ID;
  if (!database_id) {
    throw Error;
  }
  const res = await client.databases.query({
    database_id: database_id,
  });

  return res.results
    .map((value) => toPost(value))
    .filter((v): v is Post => Boolean(v));
};

const toPost = (value: GetPageResponse): Post | null => {
  if (!('properties' in value)) return null;

  const title =
    value.properties.Title?.type === 'title'
      ? richTextToString(value.properties.Title.title)
      : 'No Title';
  const slug =
    value.properties.Slug?.type === 'rich_text' &&
    value.properties.Slug.rich_text.length !== 0
      ? richTextToString(value.properties.Slug.rich_text)
      : value.id;
  const date =
    value.properties.Date?.type === 'date' && value.properties.Date.date
      ? value.properties.Date.date.start
      : '';
  const thumbnail =
    value.properties.Thumbnail?.type === 'files' &&
    value.properties.Thumbnail.files[0]?.type === 'file'
      ? value.properties.Thumbnail.files[0].file.url
      : '';

  return {
    id: value.id,
    title,
    slug,
    date,
    thumbnail,
  };
};

const richTextToString = (richText: RichTextItemResponse[]) => {
  return richText.reduce(
    (plainText, currentText) => plainText + currentText.plain_text,
    ''
  );
};
