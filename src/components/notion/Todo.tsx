import { ToDoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import React from 'react';
import { RichText } from './RichText';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

type Props = {
  block: ToDoBlockObjectResponse;
};

export const Todo: React.FC<Props> = ({ block }) => {
  return (
    <li className='flex list-none items-center'>
      <input
        className='hidden'
        type='checkbox'
        checked={block.to_do.checked}
        disabled
      />
      <div className='pt-0.5'>
        {block.to_do.checked ? <ImCheckboxChecked />: <ImCheckboxUnchecked />}
      </div>
      <span className='ml-2 sp:text-sm'>
        <RichText text={block.to_do.rich_text} />
      </span>
    </li>
  );
};
