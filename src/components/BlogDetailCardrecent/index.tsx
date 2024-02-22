import React from "react";

import { Img, Text } from "components";

type BlogDetailCardrecentProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "image" | "howtochoosea" | "december272021"
> &
  Partial<{ image: string; howtochoosea: string; december272021: string }>;

const BlogDetailCardrecent: React.FC<BlogDetailCardrecentProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[15px] items-center justify-start w-full">
          <Img
            className="h-[70px] md:h-auto object-cover w-[70px]"
            alt="image"
            src={props?.image}
          />
          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-base text-black-900 w-full"
              size="txtRalewayRomanBold16"
            >
              {props?.howtochoosea}
            </Text>
            <Text
              className="text-gray-500 text-sm tracking-[-0.50px] w-full"
              size="txtRubikRegular14"
            >
              {props?.december272021}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

BlogDetailCardrecent.defaultProps = {
  image: "images/img_rectangle1480_120x120.png",
  howtochoosea: "How to choose a chair at home",
  december272021: "December 27, 2021",
};

export default BlogDetailCardrecent;
