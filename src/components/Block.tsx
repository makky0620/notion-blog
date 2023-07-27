import React from 'react';
import { BlockResponse } from '../types/notion';
import { BulletedListItem } from './notion/BulletedListItem';
import { Callout } from './notion/Callout';
import {Code} from './notion/Code';
import H1 from './notion/H1';
import H2 from './notion/H2';
import H3 from './notion/H3';
import { NumberedListItem } from './notion/NumberedListItem';
import { Paragraph } from './notion/Paragraph';
import { Quate } from './notion/Quote';
import { Todo } from './notion/Todo';

type Props = {
  block: BlockResponse;
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
    case 'link_preview':
    case 'image':
    case 'divider':
    case 'table_of_contents':
    default:
      return <></>;
  }
};

export default Block;
