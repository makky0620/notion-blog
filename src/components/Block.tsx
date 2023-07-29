import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import React from 'react';
import { Bookmark } from './notion/Bookmark';
import { BulletedListItem } from './notion/BulletedListItem';
import { Callout } from './notion/Callout';
import { Code } from './notion/Code';
import { Divider } from './notion/Divider';
import { H1 } from './notion/H1';
import { H2 } from './notion/H2';
import { H3 } from './notion/H3';
import { NumberedListItem } from './notion/NumberedListItem';
import { Paragraph } from './notion/Paragraph';
import { Quate } from './notion/Quote';
import { Todo } from './notion/Todo';

type Props = {
  block: BlockObjectResponse;
};

const Block: React.FC<Props> = ({ block }) => {
  const blockType = block.type;

  switch (blockType) {
    case 'paragraph':
      return <Paragraph block={block} />;
    case 'heading_1':
      return <H1 block={block} />;
    case 'heading_2':
      return <H2 block={block} />;
    case 'heading_3':
      return <H3 block={block} />;
    case 'callout':
      return <Callout block={block} />;
    case 'bulleted_list_item':
      return <BulletedListItem block={block} />;
    case 'numbered_list_item':
      return <NumberedListItem block={block} />;
    case 'to_do':
      return <Todo block={block} />;
    case 'code':
      return <Code block={block} />;
    case 'quote':
      return <Quate block={block} />;
    case 'bookmark':
      return <Bookmark block={block} />;
    case 'divider':
      return <Divider />;
    case 'table_of_contents':
    case 'image':
    case 'link_preview':
    default:
      return <></>;
  }
};

export default Block;
