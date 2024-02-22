import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import Footer from "components/Footer";
import CartNavbar from "components/CartNavbar";
import HomepageCardblog from "components/HomepageCardblog";


const BlogPage: React.FC = () => {
  const homepageCardblogPropList = [
    {},
    { rectangleeighteen: "images/img_rectangle18_400x416.png" },
    { rectangleeighteen: "images/img_rectangle18_1.png" },
    { rectangleeighteen: "images/img_rectangle18_400x417.png" },
    { rectangleeighteen: "images/img_rectangle18_2.png" },
    { rectangleeighteen: "images/img_rectangle18_3.png" },
    { rectangleeighteen: "images/img_rectangle18_4.png" },
    { rectangleeighteen: "images/img_rectangle18_5.png" },
    { rectangleeighteen: "images/img_rectangle18_6.png" },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[126px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <div className="flex flex-col items-start justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[54px] items-center justify-start max-w-[1291px] mx-auto w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                  size="txtRalewayBold40"
                >
                  Read Our Latest Blog
                </Text>
                <Text
                  className="leading-[35.00px] text-center text-gray-500 text-lg tracking-[-0.50px]"
                  size="txtRubikRegular18Gray500"
                >
                  <>
                    We write various things related to furniture, from tips and
                    what things <br />I need to pay attention to when choosing
                    furniture
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {homepageCardblogPropList.map((props, index) => (
                    <React.Fragment key={`HomepageCardblog${index}`}>
                      <HomepageCardblog
                        className="flex flex-1 flex-col gap-2 items-start justify-start w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-center w-full">
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
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <CartColumnframe48095972 className="bg-gradient  flex flex-col gap-2 items-start justify-start max-w-[1291px] mx-auto pl-[59px] md:px-5 py-[46px] w-full" />
        </div>
        <Footer className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default BlogPage;
