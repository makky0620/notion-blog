import { Heading1BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import {RichText} from "./RichText";

type Props = {
  block: Heading1BlockObjectResponse;
};

const H1: React.FC<Props> = ({ block }) => {
  return (
    <h1 className='my-2 text-2xl font-extrabold'>
      <RichText text={block.heading_1.rich_text}/>
    </h1>
  );
};

export default H1;
