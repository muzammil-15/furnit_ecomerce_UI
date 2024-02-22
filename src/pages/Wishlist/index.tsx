import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import CartNavbar from "components/CartNavbar";
import CartSectionfooter from "components/CartSectionfooter";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const WishlistPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <div className="flex flex-col font-raleway items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
              size="txtRalewayBold40"
            >
              Wishlist
            </Text>
            <List
              className="flex flex-col font-rubik gap-[30px] items-start w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[131px] items-center justify-between my-0 w-full">
                <Button className="bg-gray-53 flex h-[50px] items-center justify-center p-[13px] w-[50px]">
                  <Img
                    className="h-6"
                    src="images/img_signal_deep_orange_a400.svg"
                    alt="signal"
                  />
                </Button>
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[120px] md:h-auto object-cover w-[120px]"
                    src="images/img_rectangle1480.png"
                    alt="rectangle1480"
                  />
                  <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                    <Text
                      className="leading-[35.00px] max-w-[294px] md:max-w-full text-black-900 text-xl tracking-[-0.50px]"
                      size="txtRalewayRomanBold20"
                    >
                      Complete set of sofa, pillows and bed sheets
                    </Text>
                    <Text
                      className="text-bluegray-900 text-xl tracking-[-0.50px] w-auto"
                      size="txtPoppinsBold20"
                    >
                      $ 75.00
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                  size="txtRubikSemiBold18"
                >
                  $ 75.00
                </Text>
                <Text
                  className="text-bluegray-900 text-lg tracking-[-0.50px] w-auto"
                  size="txtRubikSemiBold18Bluegray900"
                >
                  In Stock
                </Text>
                <Button className="bg-black-900 cursor-pointer font-semibold leading-[normal] min-w-[146px] py-[13px] text-center text-lg text-white-A700 tracking-[-0.50px]">
                  Add to Cart
                </Button>
              </div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[127px] items-center justify-between my-0 w-full">
                <Button className="bg-gray-53 flex h-[50px] items-center justify-center p-[13px] w-[50px]">
                  <Img
                    className="h-6"
                    src="images/img_signal_deep_orange_a400.svg"
                    alt="signal"
                  />
                </Button>
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[120px] md:h-auto object-cover w-[120px]"
                    src="images/img_rectangle1480_120x120.png"
                    alt="rectangle1480"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                      size="txtRalewayRomanBold20"
                    >
                      Teak wood chair
                    </Text>
                    <Text
                      className="text-bluegray-900 text-xl tracking-[-0.50px] w-auto"
                      size="txtPoppinsBold20"
                    >
                      $ 24.00
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                  size="txtRubikSemiBold18"
                >
                  $ 24.00
                </Text>
                <Text
                  className="text-deep_orange-A400 text-lg tracking-[-0.50px] w-auto"
                  size="txtRubikSemiBold18DeeporangeA400"
                >
                  Out Stock
                </Text>
                <Button className="bg-bluegray-100 cursor-pointer font-semibold leading-[normal] min-w-[146px] py-[13px] text-center text-lg text-white-A700 tracking-[-0.50px]">
                  Add to Cart
                </Button>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col font-rubik items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <CartColumnframe48095972 className="bg-gradient  flex flex-col gap-2 items-start justify-start max-w-[1290px] mx-auto pl-[59px] md:px-5 py-[46px] w-full" />
        </div>
        <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default WishlistPage;
