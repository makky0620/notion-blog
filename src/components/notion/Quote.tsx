import { QuoteBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import React from 'react';
import { RichText } from './RichText';

type Props = {
  block: QuoteBlockObjectResponse;
};

export const Quate: React.FC<Props> = ({ block }) => {
  return (
    <blockquote
      className={[
        'relative rounded px-6 py-2 text-lg text-slate-600 sp:text-base',
        'before:absolute before:top-1/2 before:left-1 before:h-[85%] before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-slate-500'
      ].join(' ')}
    >
      <RichText text={block.quote.rich_text} />
    </blockquote>
  );
};
