import { BlockResponse, RichTextResponse } from "@/src/types/notion";
import React from "react";

type Props = {
  text: Array<RichTextResponse>;
};

export const RichText: React.FC<Props> = ({ text }) => {
  console.log(text);
  return (
    <p>
      {text.length === 0 ? (
        <span className="" />
      ) : (
        <>
          {text.map((textItem: RichTextResponse, index: number) => {
            const { annotations, href } = textItem;
            const { bold, code, italic, underline } = annotations;
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
          })}
        </>
      )}
    </p>
  );
};
