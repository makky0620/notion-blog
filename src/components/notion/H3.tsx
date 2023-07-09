import { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import {RichText} from "./RichText";

type Props = {
  block: Heading3BlockObjectResponse;
};

const H3: React.FC<Props> = ({ block }) => {
  return (
    <h3 className='my-6 text-xl'>
      <RichText text={block.heading_3.rich_text} />
    </h3>
  );
};

export default H3;
