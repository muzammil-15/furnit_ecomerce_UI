import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
} from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import CartNavbar from "components/CartNavbar";
import CartSectionfooter from "components/CartSectionfooter";
import HomepageCardproduct from "components/HomepageCardproduct";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShopDetailDescriptionPage: React.FC = () => {
  const navigate = useNavigate();

  const homepageCardproductPropList = [
    { image: "images/img_image_10.png" },
    { image: "images/img_image_11.png" },
    { image: "images/img_image_12.png" },
    { image: "images/img_image_13.png" },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const homepageCardproductPropList1 = [
    { image: "images/img_image_10.png" },
    { image: "images/img_image_11.png" },
    { image: "images/img_image_12.png" },
    { image: "images/img_image_13.png" },
  ];

  function handleNavigate2() {
    window.location.href = "https://accounts.google.com/";
  }

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
          <div className="flex flex-col items-start justify-start pt-[75px] md:px-10 sm:px-5 px-[75px] w-full">
            <div className="flex md:flex-col flex-row gap-[47px] items-center justify-start max-w-[1290px] mx-auto w-full">
              <Img
                className="flex-1 md:flex-none md:h-[595px] sm:h-auto h-full max-h-[595px] object-cover sm:w-[] md:w-[]"
                src="images/img_rectangle1475.png"
                alt="rectangle1475"
              />
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-full">
                  <Text
                    className="max-w-[621px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.50px]"
                    size="txtRalewayRomanBold32Black900"
                  >
                    Complete set of sofa, pillows and bed sheets
                  </Text>
                  <div className="flex flex-row font-rubik gap-[15px] items-center justify-start w-full">
                    <Img
                      className="h-5 w-[140px]"
                      src="images/img_frame135.svg"
                      alt="frame135"
                    />
                    <Text
                      className="text-gray-500 text-sm tracking-[-0.50px] w-auto"
                      size="txtRubikRegular14"
                    >
                      ( 1 review )
                    </Text>
                  </div>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-bluegray-900 tracking-[-0.50px] w-full"
                    size="txtRubikBold36"
                  >
                    $ 75.00
                  </Text>
                  <div className="flex flex-col font-rubik gap-5 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        Stok :
                      </span>
                      <span className="text-black-900 font-rubik text-left font-normal">
                        {" "}
                        18
                      </span>
                    </Text>
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        SKU :
                      </span>
                      <span className="text-black-900 font-rubik text-left font-normal">
                        {" "}
                        BA65
                      </span>
                      <span className="text-black-900 font-rubik text-left font-semibold">
                        {" "}
                      </span>
                    </Text>
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        Categories :
                      </span>
                      <span className="text-black-900 font-rubik text-left font-normal">
                        {" "}
                        Chair, New Arrivals, Special
                      </span>
                    </Text>
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        Tags :
                      </span>
                      <span className="text-black-900 font-rubik text-left font-normal">
                        {" "}
                        Black, Chair
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="leading-[35.00px] max-w-[621px] md:max-w-full text-gray-500 text-lg tracking-[-0.50px]"
                    size="txtRubikRegular18Gray500"
                  >
                    In order to sit comfortably for long periods, people need
                    freedom of movement. The Form rocking chair has a molded
                    plastic shell with a wide, curved seat, which gives plenty
                    of opportunity for changing one’s sitting position.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-[19px] items-start justify-start w-[337px]">
                    <div className="border border-black-900 border-solid flex flex-row gap-[15px] items-center justify-start p-2.5 w-[38%]">
                      <Img
                        className="common-pointer h-6 ml-1 w-6"
                        src="images/img_google.svg"
                        alt="google"
                        onClick={handleNavigate2}
                      />
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px]"
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
                    <Text
                      className="common-pointer bg-black-900 flex-1 justify-center sm:pl-5 pl-[25px] pr-[13px] py-[11px] text-lg text-white-A700 tracking-[-0.50px] w-auto"
                      size="txtRubikRegular18WhiteA700"
                      onClick={() => navigate("/")}
                    >
                      Add to Cart
                    </Text>
                    <Button className="border border-bluegray-100 border-solid flex h-[43px] items-center justify-center p-3 w-[43px]">
                      <Img src="images/img_favorite.svg" alt="favorite" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row gap-[49px] items-end justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-[42px] items-start justify-start w-full">
              <div className="flex flex-row font-josefinsans gap-[50px] items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-end justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-bluegray-900 sm:text-xl tracking-[-0.50px] w-auto"
                    size="txtJosefinSansRomanBold24"
                  >
                    Description
                  </Text>
                  <Line className="bg-bluegray-900 h-1.5 w-full" />
                </div>
                <Text
                  className="common-pointer text-2xl md:text-[22px] text-gray-500 sm:text-xl tracking-[-0.50px] w-auto"
                  size="txtJosefinSansRomanBold24Gray500"
                  onClick={() => navigate("/detailreview")}
                >
                  Review
                </Text>
              </div>
              <Text
                className="leading-[35.00px] text-base text-gray-500 tracking-[-0.50px]"
                size="txtRubikRegular16"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, <br />
                  <br />
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </>
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-[21px] items-center justify-start w-full">
              <div className="bg-gray-53 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[43px] py-6 w-full">
                <div className="flex sm:flex-col flex-row gap-[42px] items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-[23px] items-start justify-start w-full">
                    <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                      <Text
                        className="text-bluegray-900 text-lg tracking-[-0.50px] w-full"
                        size="txtRubikRegular18Bluegray900"
                      >
                        Living Room
                      </Text>
                      <Text
                        className="max-w-[313px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                        size="txtRalewayBold36Black900"
                      >
                        The best foam padded chair
                      </Text>
                    </div>
                    <Button className="border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[13px] text-base text-bluegray-900 text-center tracking-[-0.50px]">
                      Shop Now
                    </Button>
                  </div>
                  <Img
                    className="h-[301px] md:h-auto max-h-[301px] object-cover sm:w-[]"
                    src="images/img_sammoghadamkh.png"
                    alt="sammoghadamkh"
                  />
                </div>
              </div>
              <PagerIndicator
                className="flex h-[15px] justify-center w-[75px]"
                count={3}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray-900 w-[15px]"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-200 w-[15px]"
                selectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-raleway items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[43px] items-start justify-start max-w-[1290px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-auto"
              size="txtRalewayBold40"
            >
              Related Products
            </Text>
            <div className="flex flex-col font-rubik gap-[43px] items-center justify-start w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="w-full"
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <List
                      className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mx-2.5"
                      orientation="horizontal"
                    >
                      {homepageCardproductPropList1.map((props, index) => (
                        <React.Fragment key={`HomepageCardproduct${index}`}>
                          <HomepageCardproduct
                            className="flex flex-col gap-4 items-start justify-start w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </List>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray-900 w-[15px]" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-200 w-[15px]"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <PagerIndicator
                className="flex gap-[15px] h-[15px] items-start justify-center max-w-[1289px] w-full"
                count={3}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray-900 w-[15px]"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-200 w-[15px]"
                sliderRef={sliderRef}
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
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

export default ShopDetailDescriptionPage;
