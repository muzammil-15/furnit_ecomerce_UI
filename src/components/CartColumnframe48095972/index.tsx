import React from "react";

import { Button, Img, Input, Text } from "components";

type CartColumnframe48095972Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "offer" | "description" | "subscribe"
> &
  Partial<{
    offer: string;
    description: JSX.Element | string;
    subscribe: string;
  }>;

const CartColumnframe48095972: React.FC<CartColumnframe48095972Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-11 items-center justify-start w-full">
          <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <Text
                className="leading-[60.00px] max-w-[593px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-53 tracking-[-0.50px]"
                size="txtRalewayRomanBold40Gray53"
              >
                {props?.offer}
              </Text>
              <Text
                className="leading-[35.00px] max-w-[593px] md:max-w-full text-base text-gray-53 tracking-[-0.50px]"
                size="txtRubikRegular16Gray53"
              >
                {props?.description}
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-px items-start justify-start w-full">
              <Input
                name="frame48095972"
                placeholder="Your email here.."
                className="font-rubik leading-[normal] p-0 placeholder:text-gray-500 sm:pr-5 text-gray-500 text-left text-lg tracking-[-0.50px] w-full"
                wrapClassName="bg-white-A700 flex-1 sm:flex-1 pl-5 pr-[35px] py-[23px] w-[74%] sm:w-full"
              ></Input>
              <Button className="bg-bluegray-900 cursor-pointer font-bold font-rubik leading-[normal] py-[23px] text-center text-lg text-yellow-100 tracking-[-0.50px] w-[157px]">
                {props?.subscribe}
              </Button>
            </div>
          </div>
          <Img
            className="flex-1 md:flex-none md:h-[309px] sm:h-auto h-full max-h-[309px] object-cover sm:w-[] md:w-[]"
            src="images/img_pexelsphotoby.png"
            alt="pexelsphotoby"
          />
        </div>
      </div>
    </>
  );
};

CartColumnframe48095972.defaultProps = {
  offer: "Subscribe now and get 10% off all items",
  description: (
    <>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry&#39;s standard dummy text.
    </>
  ),
  subscribe: "Subscribe",
};

export default CartColumnframe48095972;
