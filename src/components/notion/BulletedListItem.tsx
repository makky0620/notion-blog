import React from 'react';
import { BulletedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { RichText } from './RichText';

type Props = {
  block: BulletedListItemBlockObjectResponse;
};

export const BulletedListItem: React.FC<Props> = ({ block }) => {
  return (
    <li className='sp:text-sm'>
      <RichText text={block.bulleted_list_item.rich_text} />
    </li>
  );
};
