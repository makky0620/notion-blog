import React from 'react';
import { BlockResponse } from '../types/notion';
import { Callout } from './notion/Callout';
import H1 from './notion/H1';
import H2 from './notion/H2';
import H3 from './notion/H3';
import { Paragraph } from './notion/Paragraph';

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
    default:
      return <></>;
  }
};

export default Block;
