import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import CartNavbar from "components/CartNavbar";
import CartSectionfooter from "components/CartSectionfooter";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CartPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
          <div className="flex flex-col font-raleway items-center justify-start pt-[75px] md:px-10 sm:px-5 px-[75px] w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewayBold40"
              >
                Your Cart
              </Text>
              <div className="flex md:flex-col flex-row font-rubik md:gap-10 gap-[61px] items-center justify-start w-full">
                <List
                  className="flex flex-1 flex-col gap-[30px] items-start w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row gap-[49px] items-center justify-start my-0 w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start w-full">
                      <Img
                        className="h-[120px] md:h-auto object-cover w-[120px]"
                        src="images/img_rectangle1480.png"
                        alt="rectangle1480"
                      />
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
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
                    <div className="border border-black-900 border-solid flex flex-col items-start justify-start px-[15px] py-[5px] w-auto">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_google.svg"
                          alt="google"
                        />
                        <Text
                          className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                          size="txtRubikRegular18"
                        >
                          1
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_plus.svg"
                          alt="plus"
                        />
                      </div>
                    </div>
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                      size="txtRubikSemiBold18"
                    >
                      $ 75.00
                    </Text>
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_trash.svg"
                      alt="trash"
                    />
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-[49px] items-center justify-start my-0 w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start w-full">
                      <Img
                        className="h-[120px] md:h-auto object-cover w-[120px]"
                        src="images/img_rectangle1480.png"
                        alt="rectangle1480"
                      />
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
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
                    <div className="border border-black-900 border-solid flex flex-col items-start justify-start px-[15px] py-[5px] w-auto">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_google.svg"
                          alt="google"
                        />
                        <Text
                          className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                          size="txtRubikRegular18"
                        >
                          1
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_plus.svg"
                          alt="plus"
                        />
                      </div>
                    </div>
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                      size="txtRubikSemiBold18"
                    >
                      $ 75.00
                    </Text>
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_trash.svg"
                      alt="trash"
                    />
                  </div>
                </List>
                <div className="bg-gray-53 flex sm:flex-1 flex-col items-start justify-start sm:px-5 px-[27px] py-[31px] w-auto sm:w-full">
                  <div className="flex flex-col gap-[27px] items-start justify-start w-auto">
                    <Text
                      className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                      size="txtRalewayRomanBold20"
                    >
                      Cart Total
                    </Text>
                    <div className="flex flex-col font-rubik gap-5 items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-gray-500 text-xl tracking-[-0.50px] w-auto"
                          size="txtRalewayRomanRegular20"
                        >
                          Subtotal
                        </Text>
                        <Text
                          className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                          size="txtPoppinsSemiBold20"
                        >
                          $ 99.00
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-full">
                        <Input
                          name="frame48096036"
                          placeholder="Your Voucher"
                          className="leading-[normal] p-0 placeholder:text-black-900_3f sm:pr-5 text-black-900_3f text-left text-sm tracking-[-0.50px] w-full"
                          wrapClassName="bg-white-A700 flex-1 pl-[17px] pr-[35px] py-[13px] w-[73%]"
                        ></Input>
                        <Button className="bg-bluegray-900 cursor-pointer font-semibold leading-[normal] min-w-[98px] py-3.5 text-center text-sm text-yellow-100 tracking-[-0.50px]">
                          Apply
                        </Button>
                      </div>
                    </div>
                    <Line className="bg-black-900 h-px w-full" />
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-gray-500 text-xl tracking-[-0.50px] w-auto"
                        size="txtRalewayRomanRegular20"
                      >
                        Total
                      </Text>
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                        size="txtPoppinsSemiBold20"
                      >
                        $ 99.00
                      </Text>
                    </div>
                    <Button
                      className="common-pointer bg-bluegray-900 cursor-pointer font-rubik font-semibold leading-[normal] py-3.5 text-center text-lg text-yellow-100 tracking-[-0.50px] w-full"
                      onClick={() => navigate("/checkout")}
                    >
                      Checkout Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <CartColumnframe48095972 className="bg-gradient  flex flex-col gap-2 items-start justify-start max-w-[1290px] mx-auto pl-[59px] md:px-5 py-[46px] w-full" />
        </div>
        <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default CartPage;
