import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import React from 'react';

type Props = {
  text: Array<RichTextItemResponse>;
};

export const RichText: React.FC<Props> = ({ text }) => {
  return (
    <p className='inline whitespace-pre-wrap break-words leading-loose'>
      {text.length === 0 ? (
        <span className='block h-6' />
      ) : (
        <>
          {text.map((textItem: RichTextItemResponse, index: number) => {
            const { annotations, href } = textItem;
            const { bold, code, italic, underline } = annotations;
            const annotationClasses = Object.keys(annotations).filter(
              (param) => annotations[param as keyof typeof annotations] === true
            );
            const key = `${index}`;

            if (href) {
              return (
                <a
                  key={key}
                  href={href}
                  className={[
                    'font-medium text-blue-600 hover:underline',
                    bold ? 'font-bold' : '',
                    code ? 'bg-gray-100 p-1 font-mono text-sm rounded-md' : '',
                    italic ? 'italic' : '',
                    underline ? 'underline' : '',
                  ].join(' ')}
                >
                  {textItem.plain_text}
                </a>
              );
            }

            if (annotationClasses.length > 0) {
              return (
                <span
                  key={key}
                  className={[
                    '',
                    bold ? 'font-bold' : '',
                    code ? 'bg-gray-100 p-1 font-mono text-sm rounded-md' : '',
                    italic ? 'italic' : '',
                    underline ? 'underline' : '',
                  ].join(' ')}
                >
                  {textItem.plain_text}
                </span>
              );
            }

            return textItem.plain_text;
          })}
        </>
      )}
    </p>
  );
};
