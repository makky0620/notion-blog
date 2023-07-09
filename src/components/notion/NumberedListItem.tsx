import { NumberedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import React from 'react';
import { RichText } from './RichText';

type Props = {
  block: NumberedListItemBlockObjectResponse;
};

export const NumberedListItem: React.FC<Props> = ({ block }) => {
  return (
    <li className='sp:text-sm'>
      <RichText text={block.numbered_list_item.rich_text} />
    </li>
  );
};
