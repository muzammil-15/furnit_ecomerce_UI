import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  List,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
} from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import CartNavbar from "components/CartNavbar";
import CartSectionfooter from "components/CartSectionfooter";
import TeamCardteam from "components/TeamCardteam";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AboutusPage: React.FC = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[138px] items-center justify-between max-w-[1290px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
              <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                  <Text
                    className="leading-[60.00px] max-w-[626px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.50px]"
                    size="txtRalewayRomanBold48"
                  >
                    Provide the best quality ingredients for home products
                  </Text>
                  <Text
                    className="leading-[35.00px] max-w-[626px] md:max-w-full text-base text-gray-500 tracking-[-0.50px]"
                    size="txtRubikRegular16"
                  >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    dictumst posuere, lectus dis vehicula augue elementum quam
                    risus. Placerat dictum lobortis lacinia volutpat morbi cum
                    justo commodo est aliquam, facilisi consequat ligula vivamus
                    faucibus
                  </Text>
                </div>
                <Button className="border border-black-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[172px] py-[11px] text-black-900 text-center text-lg tracking-[-0.50px]">
                  Meet our Team
                </Button>
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                  <div className="flex flex-row font-raleway gap-2.5 items-center justify-start w-auto">
                    <Text
                      className="text-black-900 text-lg tracking-[0.12px] w-auto"
                      size="txtRalewayRomanBold18"
                    >
                      Ratings
                    </Text>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_star.svg"
                        alt="star"
                      />
                      <Text
                        className="text-black-900 text-lg tracking-[0.12px] w-auto"
                        size="txtRalewayRomanBold18"
                      >
                        5.0
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-black-900_7f text-xs tracking-[-0.50px] w-auto"
                    size="txtRubikRegular12Black9007f"
                  >
                    Trusted by many people from all over the world
                  </Text>
                </div>
                <div className="flex relative w-[230px]">
                  <div className="flex my-auto w-[81%]">
                    <div className="flex my-auto w-[76%]">
                      <div className="flex my-auto w-[68%]">
                        <Img
                          className="h-[50px] my-auto rounded-[50%] w-[50px]"
                          src="images/img_unsplashwnolnjo7ts8.png"
                          alt="unsplashwnolnjo"
                        />
                        <Img
                          className="h-[50px] ml-[-5px] my-auto rounded-[50%] w-[50px] z-[1]"
                          src="images/img_unsplashrtvgs4vgkgm.png"
                          alt="unsplashrtvgs4v"
                        />
                      </div>
                      <Img
                        className="h-[50px] ml-[-5px] my-auto rounded-[50%] w-[50px] z-[1]"
                        src="images/img_unsplashd1upkifd04a.png"
                        alt="unsplashd1upkif"
                      />
                    </div>
                    <Img
                      className="h-[50px] ml-[-5px] my-auto rounded-[50%] w-[50px] z-[1]"
                      src="images/img_unsplashplsf6obtgms.png"
                      alt="unsplashplsf6ob"
                    />
                  </div>
                  <Text
                    className="bg-bluegray-900 flex h-[50px] items-center justify-center ml-[-5px] my-auto rounded-[50%] text-center text-sm text-yellow-100 tracking-[-0.50px] w-[50px] z-[1]"
                    size="txtRubikSemiBold14"
                  >
                    3K+
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="h-[650px] sm:h-auto max-h-[650px] object-cover rounded-bl-[300px] rounded-tl-[300px] rounded-tr-[300px] sm:w-[] md:w-[]"
              src="images/img_rectangle1492.png"
              alt="rectangle1492"
            />
          </div>
        </div>
        <div className="bg-black-900 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[173px] py-[41px] w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1094px] mx-auto w-full">
            <Text
              className="text-center text-gray-53 text-xl tracking-[-0.50px] w-full"
              size="txtRubikRegular20"
            >
              Various brands have used our products
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
              <Img
                className="h-12 w-[220px]"
                src="images/img_search.svg"
                alt="search"
              />
              <Img
                className="h-12 w-[125px]"
                src="images/img_companylogocompany109_gray_53.svg"
                alt="companylogocomp"
              />
              <Img
                className="h-12 w-[92px]"
                src="images/img_companylogocompany109.svg"
                alt="companylogocomp_One"
              />
              <Img
                className="h-12 w-[141px]"
                src="images/img_companylogocompany109_gray_53_48x141.svg"
                alt="companylogocomp_Two"
              />
              <Img
                className="h-12 w-[134px]"
                src="images/img_companylogocompany109_gray_53_48x134.svg"
                alt="companylogocomp_Three"
              />
              <Img
                className="h-12 w-[132px]"
                src="images/img_companylogocompany109_gray_53_48x132.svg"
                alt="companylogocomp_Four"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[53px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewayBold40"
              >
                Meet Our Team
              </Text>
              <Text
                className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full"
                size="txtRubikRegular18Gray500"
              >
                We write various things related to furniture, from tips and what
                things I need to pay attention to when choosing furniture
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 3 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="gap-5 w-full"
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <TeamCardteam
                      className="flex flex-1 flex-col gap-2 items-start justify-start mx-2.5"
                      linkedin="images/img_linkedin.svg"
                      facebook="images/img_facebook.svg"
                      twitter="images/img_twitter.svg"
                    />
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
            </div>
            <PagerIndicator
              className="flex gap-[15px] h-[15px] items-start justify-start w-[75px]"
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
        <div className="h-[535px] md:h-[892px] md:px-5 relative w-full">
          <div className="absolute bg-yellow-100 bottom-[0] h-[440px] inset-x-[0] mx-auto w-full"></div>
          <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-y-[0] items-center justify-between max-w-[1365px] my-auto right-[0] w-full">
            <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start w-[525px] sm:w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-bluegray-900 sm:text-xl tracking-[-0.50px] w-full"
                  size="txtRubikRegular24"
                >
                  Interior Modern
                </Text>
                <Text
                  className="leading-[60.00px] max-w-[525px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px]"
                  size="txtRalewayRomanBold40"
                >
                  Arrange your home in such a way with our modern interiors
                </Text>
              </div>
              <Button
                className="common-pointer border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-bluegray-900 text-center text-xl tracking-[-0.50px]"
                onClick={() => navigate("/shopdetaildescription")}
              >
                Shop Now
              </Button>
            </div>
            <Img
              className="sm:flex-1 h-[535px] md:h-auto object-cover w-[535px] sm:w-full"
              src="images/img_insideweather.png"
              alt="insideweather"
            />
          </div>
        </div>
        <div className="flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[0.12px] w-full"
              size="txtPoppinsSemiBold40"
            >
              <span className="text-black-900 font-raleway font-bold">
                How happy are they with{" "}
              </span>
              <span className="text-black-900 font-raleway font-bold">
                our service
              </span>
            </Text>
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState1}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState1(e?.item);
                }}
                ref={sliderRef1}
                className="w-full"
                items={[...Array(5)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <List
                      className="sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mx-2.5"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-full">
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <Img
                            className="h-[50px] w-[50px]"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
                          <div className="flex flex-col gap-5 items-start justify-start w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                              <Text
                                className="leading-[35.00px] max-w-[364px] md:max-w-full text-black-900 text-lg tracking-[0.12px]"
                                size="txtPoppinsSemiBold18"
                              >
                                <>
                                  For the material and the chair as we expected
                                  it&#39;s good
                                </>
                              </Text>
                              <Text
                                className="leading-[35.00px] max-w-[364px] md:max-w-full text-black-900_87 text-sm tracking-[0.12px]"
                                size="txtPoppinsRegular14"
                              >
                                <>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy
                                  text ever.
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[19px] items-center justify-start w-full">
                              <Img
                                className="h-14 md:h-auto rounded-[50%] w-14"
                                src="images/img_unsplashwnolnjo7ts8_56x56.png"
                                alt="unsplashwnolnjo"
                              />
                              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start w-full">
                                <Text
                                  className="text-black-900 text-lg tracking-[0.12px] w-full"
                                  size="txtPoppinsSemiBold18"
                                >
                                  Dagruel Manulo
                                </Text>
                                <Text
                                  className="text-black-900_7f1 text-sm tracking-[0.12px] w-full"
                                  size="txtPoppinsRegular14Black9007f1"
                                >
                                  Sydney, Australia
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-full">
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <Img
                            className="h-[50px] w-[50px]"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
                          <div className="flex flex-col gap-5 items-start justify-start w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                              <Text
                                className="leading-[35.00px] max-w-[364px] md:max-w-full text-black-900 text-lg tracking-[0.12px]"
                                size="txtPoppinsSemiBold18"
                              >
                                <>
                                  For the material and the chair as we expected
                                  it&#39;s good
                                </>
                              </Text>
                              <Text
                                className="leading-[35.00px] max-w-[364px] md:max-w-full text-black-900_87 text-sm tracking-[0.12px]"
                                size="txtPoppinsRegular14"
                              >
                                <>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy
                                  text ever.
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[19px] items-center justify-start w-full">
                              <Img
                                className="h-14 md:h-auto rounded-[50%] w-14"
                                src="images/img_unsplashwnolnjo7ts8_1.png"
                                alt="unsplashwnolnjo"
                              />
                              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start w-full">
                                <Text
                                  className="text-black-900 text-lg tracking-[0.12px] w-full"
                                  size="txtPoppinsSemiBold18"
                                >
                                  Zambi Owel
                                </Text>
                                <Text
                                  className="text-black-900_7f1 text-sm tracking-[0.12px] w-full"
                                  size="txtPoppinsRegular14Black9007f1"
                                >
                                  Sydney, Australia
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-full">
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <Img
                            className="h-[50px] w-[50px]"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
                          <div className="flex flex-col gap-5 items-start justify-start w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                              <Text
                                className="leading-[35.00px] max-w-[364px] md:max-w-full text-black-900 text-lg tracking-[0.12px]"
                                size="txtPoppinsSemiBold18"
                              >
                                <>
                                  For the material and the chair as we expected
                                  it&#39;s good
                                </>
                              </Text>
                              <Text
                                className="leading-[35.00px] max-w-[364px] md:max-w-full text-black-900_87 text-sm tracking-[0.12px]"
                                size="txtPoppinsRegular14"
                              >
                                <>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy
                                  text ever.
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[19px] items-center justify-start w-full">
                              <Img
                                className="h-14 md:h-auto rounded-[50%] w-14"
                                src="images/img_unsplashwnolnjo7ts8_2.png"
                                alt="unsplashwnolnjo"
                              />
                              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start w-full">
                                <Text
                                  className="text-black-900 text-lg tracking-[0.12px] w-full"
                                  size="txtPoppinsSemiBold18"
                                >
                                  Mario
                                </Text>
                                <Text
                                  className="text-black-900_7f1 text-sm tracking-[0.12px] w-full"
                                  size="txtPoppinsRegular14Black9007f1"
                                >
                                  Sydney, Australia
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                className="flex gap-2.5 h-[15px] items-center justify-center max-w-[1290px] w-full"
                count={5}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray-900 w-[15px]"
                activeIndex={sliderState1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-200 w-[15px]"
                sliderRef={sliderRef1}
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

export default AboutusPage;
