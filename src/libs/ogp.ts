import {
  BlockObjectResponse,
  BookmarkBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import ogpParser from 'ogp-parser';
import { Ogp } from '../types/ogp';

export const getOgp = async (url: string) => {
  try {
    const encodeURL = encodeURI(url);
    const { title, ogp } = await ogpParser(encodeURL);

    return {
      url: encodeURL,
      title: title,
      description:
        ogp['og:description']?.length > 0 ? ogp['og:description'][0] : '',
      imageUrl: ogp['og:image']?.length > 0 ? ogp['og:image'][0] : '',
      faviconUrl: `https://www.google.com/s2/favicons?domain=${encodeURL}`,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('OPGの取得に失敗しました');

    return {
      url: url,
      title: '',
      description: '',
      imageUrl: '',
      faviconUrl: '',
    };
  }
};

export const setOgp = async (
  children: BlockObjectResponse[]
): Promise<BlockObjectResponse[]> => {
  const results = await Promise.all(
    children.map(async (child) => {
      if (child.type !== 'bookmark') return child;

      const url = child.bookmark.url;
      const ogp = await getOgp(url);

      return {
        ...child,
        ogp,
      } as BookmarkBlockObjectResponse & { ogp: Ogp };
    })
  );

  return results;
};
