import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import Footer from "components/Footer";
import CartNavbar from "components/CartNavbar";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContactusPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[75px] items-start justify-start w-full">
          <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
          <div className="flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
            <div className="flex flex-col items-start justify-start max-w-[1291px] mx-auto w-full">
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
          <div className="flex md:flex-col flex-row md:gap-10 gap-[71px] items-start justify-start max-w-[1291px] mx-auto w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-11 items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.50px] w-full"
                  size="txtRalewayRomanBold32Black900"
                >
                  Frequently asked questions
                </Text>
                <Accordion
                  preExpanded={[0]}
                  className="flex flex-col gap-[30px] w-full"
                >
                  {[...Array(3)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                        <AccordionItemHeading className="w-full">
                          <AccordionItemButton>
                            <AccordionItemState>
                              {({ expanded }) => (
                                <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                                  <div className="flex md:flex-col flex-row md:gap-10 gap-[88px] items-start justify-start w-full">
                                    <Text
                                      className="flex-1 text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                                      size="txtRalewayRomanRegular24"
                                    >
                                      How can I make refund from your website?
                                    </Text>
                                    {expanded && (
                                      <Img
                                        className="h-6 w-6"
                                        src="images/img_plus_bluegray_902.svg"
                                        alt="plus_One"
                                      />
                                    )}
                                    {!expanded && (
                                      <Img
                                        className="h-6 w-6"
                                        src="images/img_plus_bluegray_902.svg"
                                        alt="plus"
                                      />
                                    )}
                                  </div>
                                  {expanded && (
                                    <Line className="bg-black-900_19 h-px w-full" />
                                  )}
                                </div>
                              )}
                            </AccordionItemState>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="w-full ">
                          <div className="flex flex-col gap-[30px] items-start justify-start mx-auto w-full">
                            <div className="flex flex-col gap-4 items-start justify-start w-full">
                              <div className="flex flex-row font-raleway sm:gap-10 items-start justify-between w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-bluegray-900 sm:text-xl w-auto"
                                  size="txtRalewayRomanRegular24Bluegray900"
                                >
                                  How to buy a product?
                                </Text>
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_ticket.svg"
                                  alt="ticket"
                                />
                              </div>
                              <Text
                                className="leading-[35.00px] max-w-[610px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                                size="txtRubikRegular14"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Id a enim, consectetur cursus.
                                At mattis nulla in pretium. Condimentum sagittis
                                mauris augue maecenas fusce commodo neque purus
                                et. Integer eu amet at pretium id ultrices
                                faucibus. In vestibulum pretium, potenti
                                molestie.
                              </Text>
                            </div>
                            <Line className="bg-black-900_19 h-px w-full" />
                          </div>
                        </AccordionItemPanel>
                      </div>
                      <Line className="self-center h-px bg-black-900_19 w-full" />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                size="txtRalewayBold24"
              >
                Contact Us
              </Text>
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                        size="txtRalewayRomanSemiBold18"
                      >
                        Your Name
                      </Text>
                      <Input
                        name="frame48096015"
                        placeholder="Write your name here...."
                        className="font-rubik p-0 placeholder:text-gray-500 sm:pr-5 text-gray-500 text-left text-sm tracking-[-0.50px] w-full"
                        wrapClassName="border border-bluegray-100 border-solid pl-[18px] pr-[35px] py-5 w-full"
                        type="text"
                      ></Input>
                    </div>
                    <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                        size="txtRalewayRomanSemiBold18"
                      >
                        Your Email
                      </Text>
                      <Input
                        name="frame48096015_One"
                        placeholder="Write your email here...."
                        className="font-rubik p-0 placeholder:text-gray-500 sm:pr-5 text-gray-500 text-left text-sm tracking-[-0.50px] w-full"
                        wrapClassName="border border-bluegray-100 border-solid pl-[18px] pr-[35px] py-5 w-full"
                        type="email"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRalewayRomanSemiBold18"
                    >
                      Your Comment
                    </Text>
                    <div className="border border-bluegray-100 border-solid flex flex-col font-rubik h-[218px] md:h-auto items-start justify-start p-4 w-full">
                      <Text
                        className="text-gray-500 text-sm tracking-[-0.50px] w-auto"
                        size="txtRubikRegular14"
                      >
                        Write your review here....
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-poppins items-start justify-start w-full">
                  <Button className="bg-bluegray-900 border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[140px] py-[13px] text-base text-center text-white-A700 tracking-[-0.50px]">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-rubik items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <CartColumnframe48095972 className="bg-gradient  flex flex-col gap-2 items-start justify-start max-w-[1291px] mx-auto pl-[59px] md:px-5 py-[46px] w-full" />
        </div>
        <Footer className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default ContactusPage;
