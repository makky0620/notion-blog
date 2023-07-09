import { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import {RichText} from "./RichText";

type Props = {
  block: Heading2BlockObjectResponse;
};

const H2: React.FC<Props> = ({ block }) => {
  return (
    <h2 className='my-6 font-bold text-[1.5em]'>
      <RichText text={block.heading_2.rich_text} />
    </h2>
  );
};

export default H2;
