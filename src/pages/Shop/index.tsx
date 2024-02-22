import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import CartNavbar from "components/CartNavbar";
import CartSectionfooter from "components/CartSectionfooter";
import HomepageCardproduct from "components/HomepageCardproduct";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sortOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShopPage: React.FC = () => {
  const homepageCardproductPropList = [
    { save: "images/img_save.svg", status: "New" },
    { image: "images/img_image_7.png" },
    { image: "images/img_image_8.png" },
    { image: "images/img_image_10.png" },
    { image: "images/img_image_11.png" },
    { image: "images/img_image_12.png" },
    { image: "images/img_image_9.png" },
    { image: "images/img_image_13.png" },
    { image: "images/img_image_7.png" },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[75px] items-start justify-start w-full">
          <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
          <div className="flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
            <div className="flex flex-col items-start justify-start max-w-[1290px] mx-auto w-full">
              <div className="h-[450px] relative w-full">
                <Img
                  className="h-[450px] m-auto object-cover w-full"
                  src="images/img_rectangle28.png"
                  alt="rectangleTwentyEight"
                />
                <div className="absolute flex flex-col gap-[30px] h-max inset-y-[0] items-start justify-start left-[5%] my-auto w-auto">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-lg text-yellow-100 tracking-[-0.50px] w-auto"
                      size="txtRubikSemiBold18Yellow100"
                    >
                      Best Room Decor Items
                    </Text>
                    <Text
                      className="leading-[60.00px] max-w-[465px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.50px]"
                      size="txtRalewayRomanBold36"
                    >
                      Our goods have the best quality and materials in the world
                    </Text>
                  </div>
                  <Button className="bg-yellow-100 cursor-pointer font-bold leading-[normal] min-w-[170px] py-[15px] text-bluegray-900 text-center text-xl tracking-[-0.50px]">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-raleway items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-[308px]">
              <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRalewayRomanSemiBold20"
                >
                  Filter By Price
                </Text>
                <div className="flex flex-row gap-4 items-center justify-start w-full">
                  <Text
                    className="border border-gray-500_87 border-solid pl-2 sm:pr-5 pr-[35px] py-[7px] rounded text-gray-500 text-lg tracking-[-0.50px] w-auto"
                    size="txtRubikRegular18Gray500"
                  >
                    $0
                  </Text>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtPlusJakartaSansRomanSemiBold14"
                  >
                    -
                  </Text>
                  <Text
                    className="border border-gray-500_87 border-solid pl-2 sm:pr-5 pr-[35px] py-[7px] rounded text-gray-500 text-lg tracking-[-0.50px] w-auto"
                    size="txtRubikRegular18Gray500"
                  >
                    $2000
                  </Text>
                </div>
                <Img
                  className="h-4 w-[233px]"
                  src="images/img_slider.svg"
                  alt="slider"
                />
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRalewayRomanSemiBold20"
                >
                  Filter By Color
                </Text>
                <Img
                  className="h-10 w-full"
                  src="images/img_frame48095956.svg"
                  alt="frame48095956"
                />
                <Img
                  className="h-10 w-full"
                  src="images/img_frame48095957.svg"
                  alt="frame48095957"
                />
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRalewayRomanSemiBold20"
                >
                  Product Categories
                </Text>
                <div className="flex flex-col font-poppins gap-5 items-start justify-start w-full">
                  <Text
                    className="text-base text-bluegray-900 tracking-[-0.50px] w-full"
                    size="txtPoppinsRegular16"
                  >
                    Chair (9)
                  </Text>
                  <Text
                    className="text-base text-gray-500 tracking-[-0.50px] w-full"
                    size="txtPoppinsRegular16Gray500"
                  >
                    Lamp (10)
                  </Text>
                  <Text
                    className="text-base text-gray-500 tracking-[-0.50px] w-full"
                    size="txtPoppinsRegular16Gray500"
                  >
                    Table (12)
                  </Text>
                  <Text
                    className="text-base text-gray-500 tracking-[-0.50px] w-full"
                    size="txtPoppinsRegular16Gray500"
                  >
                    Sofa (6)
                  </Text>
                  <Text
                    className="text-base text-gray-500 tracking-[-0.50px] w-full"
                    size="txtPoppinsRegular16Gray500"
                  >
                    Table (12)
                  </Text>
                  <Text
                    className="text-base text-gray-500 tracking-[-0.50px] w-full"
                    size="txtPoppinsRegular16Gray500"
                  >
                    Clock (5)
                  </Text>
                  <Text
                    className="text-base text-gray-500 tracking-[-0.50px] w-full"
                    size="txtPoppinsRegular16Gray500"
                  >
                    Pillow (3)
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRalewayRomanSemiBold20"
                >
                  Product Tag
                </Text>
                <div className="flex flex-col font-poppins gap-[15px] items-start justify-start w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                    <Button className="bg-bluegray-900 border border-bluegray-900 border-solid cursor-pointer leading-[normal] min-w-[66px] py-1.5 rounded-[5px] text-base text-center text-yellow-100 tracking-[-0.50px]">
                      Chair
                    </Button>
                    <Button className="border border-gray-500 border-solid cursor-pointer leading-[normal] min-w-[68px] py-1.5 rounded-[5px] text-base text-center text-gray-500 tracking-[-0.50px]">
                      Lamp
                    </Button>
                    <Button className="border border-gray-500 border-solid cursor-pointer leading-[normal] min-w-[101px] py-1.5 rounded-[5px] text-base text-center text-gray-500 tracking-[-0.50px]">
                      Minimalist
                    </Button>
                  </div>
                  <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                    <Button className="border border-gray-500 border-solid cursor-pointer leading-[normal] min-w-[59px] py-1.5 rounded-[5px] text-base text-center text-gray-500 tracking-[-0.50px]">
                      Sofa
                    </Button>
                    <Button className="border border-gray-500 border-solid cursor-pointer leading-[normal] min-w-[58px] py-1.5 rounded-[5px] text-base text-center text-gray-500 tracking-[-0.50px]">
                      New
                    </Button>
                    <Button className="border border-gray-500 border-solid cursor-pointer leading-[normal] min-w-[67px] py-1.5 rounded-[5px] text-base text-center text-gray-500 tracking-[-0.50px]">
                      Clock
                    </Button>
                  </div>
                  <Button className="border border-gray-500 border-solid cursor-pointer leading-[normal] min-w-[66px] py-1.5 rounded-[5px] text-base text-center text-gray-500 tracking-[-0.50px]">
                    Pillow
                  </Button>
                </div>
              </div>
              <div className="h-[400px] relative w-full">
                <Img
                  className="h-[400px] m-auto object-cover rounded-[10px] w-[308px] md:w-full"
                  src="images/img_rectangle29.png"
                  alt="rectangleTwentyNine"
                />
                <div className="absolute bottom-[10%] flex flex-col gap-[15px] inset-x-[0] items-center justify-start mx-auto w-auto">
                  <Text
                    className="leading-[35.00px] max-w-[265px] md:max-w-full text-center text-white-A700 text-xl"
                    size="txtRalewayRomanBold20WhiteA700"
                  >
                    Make a purchase now and get 50% discount
                  </Text>
                  <Button className="bg-yellow-100 border border-solid border-yellow-100 cursor-pointer font-poppins font-semibold leading-[normal] min-w-[107px] py-[7px] rounded-[5px] text-base text-black-900 text-center tracking-[-0.50px]">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-rubik gap-[50px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-1 flex-col font-rubik items-start justify-start w-[407px] sm:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <div className="flex sm:flex-1 flex-col items-center justify-start w-[74%] sm:w-full">
                      <Input
                        name="frame48095984"
                        placeholder="Office Chair"
                        className="leading-[normal] p-0 placeholder:text-black-900_3f sm:pr-5 text-black-900_3f text-left text-sm tracking-[-0.50px] w-full"
                        wrapClassName="bg-white-A700 pl-4 pr-[35px] py-[15px] w-full"
                      ></Input>
                    </div>
                    <Button className="bg-bluegray-900 cursor-pointer font-semibold leading-[normal] min-w-[107px] py-4 text-center text-sm text-yellow-100 tracking-[-0.50px]">
                      Search
                    </Button>
                  </div>
                </div>
                <SelectBox
                  className="sm:flex-1 font-medium font-raleway text-black-900 text-left text-sm w-[8%] sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="sort"
                  options={sortOptionsList}
                  isSearchable={false}
                  placeholder="Sort By"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {homepageCardproductPropList.map((props, index) => (
                    <React.Fragment key={`HomepageCardproduct${index}`}>
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-center max-w-[962px] w-full">
                <Img
                  className="h-[15px] w-[15px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
                <Button className="bg-bluegray-900 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded-[17px] text-center text-sm text-white-A700 tracking-[-0.50px] w-[35px]">
                  1
                </Button>
                <Button className="bg-gray-100 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded-[17px] text-black-900 text-center text-sm tracking-[-0.50px] w-[35px]">
                  2
                </Button>
                <Button className="bg-gray-100 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded-[17px] text-black-900 text-center text-sm tracking-[-0.50px] w-[35px]">
                  3
                </Button>
                <Button className="bg-gray-100 flex h-[35px] items-center justify-center p-[7px] rounded-[17px] w-[35px]">
                  <Img className="h-5" src="images/img_user.svg" alt="user" />
                </Button>
                <Img
                  className="h-[15px] w-[15px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
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

export default ShopPage;
