import React from 'react';
import { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

type Props = {
  block: ImageBlockObjectResponse;
};

export const Image: React.FC<Props> = ({ block }) => {
  const url = block.image.type === 'file' ? block.image.file.url : '';
  const caption =
    block.image.caption.length > 0 ? block.image.caption[0].plain_text : '';
  return <img src={url} alt={caption || ''} />;
};
