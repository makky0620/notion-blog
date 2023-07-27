import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { RichText } from './RichText';

type Props = {
  block: CodeBlockObjectResponse;
};

export const Code: React.FC<Props> = ({ block }) => {
  const language = block.code.language;
  return (
    <div className='my-8'>
      <SyntaxHighlighter language={language} style={tomorrow}>
        {block.code.rich_text[0]?.plain_text || ''}
      </SyntaxHighlighter>
      {block.code.caption.length > 0 && (
        <div className='-mt-1 rounded-b-md pb-2 text-xs'>
          <RichText text={block.code.caption} />
        </div>
      )}
    </div>
  );
};
