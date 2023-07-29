import { Ogp } from '@/src/types/ogp';
import { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import React from 'react';

type Props = {
  block: BookmarkBlockObjectResponse & { ogp?: Ogp };
};

export const Bookmark: React.FC<Props> = ({ block }) => {
  const ogp = block.ogp
    ? block.ogp
    : {
        url: block.bookmark.url,
        title: '',
        description: '',
        imageUrl: '',
        faviconUrl: '',
      };
  const noOgp = !ogp.title && !ogp.description && !ogp.imageUrl;
  console.log(ogp);
  return noOgp ? <Skelton /> : <LinkPreview {...ogp} />;
};

const LinkPreview: React.FC<Ogp> = (props) => {
  return (
    <a
      className="my-6 flex min-h-[120px] cursor-pointer justify-between rounded-lg border border-solid border-slate-400 bg-slate-50 hover:bg-slate-100 sp:flex-col"
      href={props.url}
      target='_blank'
    >
      <div className='flex max-w-[400px] flex-col justify-center gap-2 overflow-hidden px-6 py-3 sp:py-2 sp:px-4'>
        <div className='font-bold text-slate-800 line-clamp-2 sp:text-sm'>
          {props.title}
        </div>
        <div className='space-y-3 text-sm text-slate-600 line-clamp-2 sp:text-xs'>
          {props.description}
        </div>
        <div className='flex items-center gap-2'>
          <img 
            src={props.faviconUrl}
            alt='test'
            width={16}
            height={16}
          />
        </div>
      </div>
      <div className='flex items-end'>
        {props.imageUrl ? (
          <img
            src={props.imageUrl}
            className='h-full max-w-[240px] rounded-r-lg object-cover sp:max-w-full sp:rounded-b-lg sp:rounded-t-none'
            alt='bookmark ogp image'
          />
        ) : (
          <Skelton />
        )}
      </div>
    </a>
  );
};

const Skelton: React.FC<{}> = () => {
  return <div>Loading</div>;
};
