import React from "react";
import { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import {RichText} from "./RichText";

type Props = {
  block: ParagraphBlockObjectResponse;
};

export const Paragraph: React.FC<Props> = ({ block }) => {
  return (
    <div>
      <RichText text={block.paragraph.rich_text}/>
    </div>
  );
};
