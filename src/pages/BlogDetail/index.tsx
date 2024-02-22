import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";
import BlogDetailCardrecent from "components/BlogDetailCardrecent";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import Footer from "components/Footer";
import Header from "components/Header";
import HomepageCardblog from "components/HomepageCardblog";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BlogDetailPage: React.FC = () => {
  const blogDetailCardrecentPropList = [
    {},
    { image: "images/img_image_70x70.png" },
    { image: "images/img_image_14.png" },
    { image: "images/img_image_15.png" },
  ];
  const homepageCardblogPropList = [
    {},
    { rectangleeighteen: "images/img_rectangle18_400x416.png" },
    { rectangleeighteen: "images/img_rectangle18_1.png" },
  ];

  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate5() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <div className="flex flex-col items-start justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col md:gap-10 gap-[85px] items-center justify-start max-w-[1291px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <div className="flex flex-col font-raleway gap-4 items-center justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                    size="txtRalewayBold40"
                  >
                    Why should you choose good wood
                  </Text>
                  <div className="flex flex-row font-rubik gap-[18px] items-center justify-center max-w-[1290px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                        size="txtRubikRegular18"
                      >
                        By Admin
                      </Text>
                    </div>
                    <Line className="bg-gray-500 h-[15px] w-px" />
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                        size="txtRubikRegular18"
                      >
                        December 10, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="text-base text-center text-gray-500 tracking-[-0.50px] w-full"
                  size="txtRubikRegular16"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever.
                  </>
                </Text>
              </div>
              <Img
                className="h-[450px] md:h-auto object-cover w-full"
                src="images/img_rectangle1488.png"
                alt="rectangle1488"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[110px] items-start justify-between w-full">
              <div className="flex flex-1 flex-col gap-[50px] items-start justify-start w-full">
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.50px] w-full"
                      size="txtRalewayRomanBold32Black900"
                    >
                      How to choose the best chair
                    </Text>
                    <Text
                      className="leading-[35.00px] max-w-[853px] md:max-w-full text-base text-gray-500 tracking-[-0.50px]"
                      size="txtRubikRegular16"
                    >
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      dictumst posuere, lectus dis vehicula augue elementum quam
                      risus. Placerat dictum lobortis lacinia volutpat morbi cum
                      justo commodo est aliquam, facilisi consequat ligula
                      vivamus faucibus ac sociis cubilia neque, felis fringilla
                      aenean hac eleifend tellus pellentesque quis suspendisse.
                      Sociosqu suscipit sodales taciti rutrum condimentum
                      conubia volutpat cubilia mi, velit curabitur consequat
                      proin neque commodo interdum eleifend dui, ac magna leo
                      ridiculus facilisi duis sapien etiam.
                    </Text>
                    <Text
                      className="leading-[35.00px] max-w-[853px] md:max-w-full text-base text-gray-500 tracking-[-0.50px]"
                      size="txtRubikRegular16"
                    >
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      dictumst posuere, lectus dis vehicula augue elementum quam
                      risus. Placerat dictum lobortis lacinia volutpat morbi cum
                      justo commodo est aliquam, facilisi consequat ligula
                      vivamus faucibus ac sociis cubilia neque.
                    </Text>
                  </div>
                  <Img
                    className="h-[500px] sm:h-auto object-cover w-full"
                    src="images/img_rectangle1489.png"
                    alt="rectangle1489"
                  />
                  <Text
                    className="leading-[35.00px] max-w-[853px] md:max-w-full text-base text-gray-500 tracking-[-0.50px]"
                    size="txtRubikRegular16"
                  >
                    Massa mus mattis natoque ante sapien venenatis nisl, mauris
                    malesuada parturient fringilla dignissim tortor morbi,
                    imperdiet quam faucibus id nunc cum. Suscipit lectus curae
                    cum in taciti ullamcorper accumsan luctus, euismod ornare
                    fames aenean ultrices odio ultricies et mus, gravida
                    condimentum senectus hendrerit lobortis sociis quam. Blandit
                    placerat cras suscipit egestas arcu nam ligula rhoncus,
                    tortor purus proin nulla faucibus odio molestie semper,
                    venenatis urna mollis libero praesent cum nec.
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-start w-full">
                    <Img
                      className="flex-1 h-[500px] md:h-auto max-h-[500px] object-cover sm:w-[]"
                      src="images/img_rectangle1490.png"
                      alt="rectangle1490"
                    />
                    <Img
                      className="flex-1 h-[500px] md:h-auto max-h-[500px] object-cover sm:w-[]"
                      src="images/img_rectangle1491.png"
                      alt="rectangle1491"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-raleway gap-[50px] items-start justify-start w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-auto"
                      size="txtRalewayRomanSemiBold24"
                    >
                      Tag :
                    </Text>
                    <div className="flex flex-row font-rubik gap-2.5 items-start justify-start w-auto">
                      <Button className="bg-bluegray-900 border border-bluegray-900 border-solid cursor-pointer leading-[normal] min-w-[62px] py-1.5 rounded-[5px] text-base text-center text-yellow-100 tracking-[-0.50px]">
                        Chair
                      </Button>
                      <Button className="border border-gray-500 border-solid cursor-pointer leading-[normal] min-w-[65px] py-1.5 rounded-[5px] text-base text-center text-gray-500 tracking-[-0.50px]">
                        Lamp
                      </Button>
                      <Button className="border border-gray-500 border-solid cursor-pointer leading-[normal] min-w-[96px] py-1.5 rounded-[5px] text-base text-center text-gray-500 tracking-[-0.50px]">
                        Minimalist
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                      size="txtRalewayBold24"
                    >
                      Leave a Comment
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
                      <div className="flex flex-col font-poppins gap-[30px] items-start justify-start w-full">
                        <CheckBox
                          className="italic leading-[normal] text-gray-500 text-left text-sm tracking-[-0.50px]"
                          inputClassName="border border-bluegray-100 border-solid h-[18px] mr-[5px] w-[18px]"
                          name="savemynameemail_One"
                          id="savemynameemail_One"
                          label="Save my name, email, and website in this browser for the next time I comment."
                        ></CheckBox>
                        <Button className="bg-bluegray-900 border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[13px] text-base text-center text-white-A700 tracking-[-0.50px]">
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[50px] items-start justify-start w-[328px]">
                <div className="flex flex-row items-start justify-start w-full">
                  <Input
                    name="frame48096101"
                    placeholder="Find Something..."
                    className="leading-[normal] md:h-auto p-0 placeholder:text-black-900_3f sm:h-auto sm:pr-5 text-black-900_3f text-left text-sm tracking-[-0.50px] w-full"
                    wrapClassName="bg-gray-53 pb-3.5 pl-3 pr-[35px] pt-[17px] w-[68%]"
                  ></Input>
                  <Button className="bg-bluegray-900 cursor-pointer font-semibold leading-[normal] min-w-[107px] py-4 text-center text-sm text-yellow-100 tracking-[-0.50px]">
                    Search
                  </Button>
                </div>
                <div className="flex flex-col font-raleway gap-5 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtRalewayRomanSemiBold20Gray900"
                  >
                    Recent Post
                  </Text>
                  <List
                    className="flex flex-col gap-5 items-start w-full"
                    orientation="vertical"
                  >
                    {blogDetailCardrecentPropList.map((props, index) => (
                      <React.Fragment key={`BlogDetailCardrecent${index}`}>
                        <BlogDetailCardrecent
                          className="flex flex-1 flex-col gap-2 items-start justify-center my-0 w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                </div>
                <div className="flex flex-col font-josefinsans gap-5 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtJosefinSansRomanSemiBold20"
                  >
                    Follow Us
                  </Text>
                  <div className="flex flex-row gap-5 items-start justify-start w-full">
                    <Button className="bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10">
                      <Img
                        className="h-6"
                        src="images/img_camera.svg"
                        alt="camera"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10"
                      onClick={handleNavigate}
                    >
                      <Img
                        className="h-6"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10"
                      onClick={handleNavigate5}
                    >
                      <Img
                        className="h-6"
                        src="images/img_twitter.svg"
                        alt="twitter"
                      />
                    </Button>
                    <Button className="bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10">
                      <Img
                        className="h-6"
                        src="images/img_music.svg"
                        alt="music"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col font-josefinsans gap-5 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtJosefinSansRomanSemiBold20"
                  >
                    Our Gallery
                  </Text>
                  <List
                    className="flex flex-col gap-[18px] items-start w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-3.5 items-start justify-start my-0 w-full">
                      <Img
                        className="h-[100px] md:h-auto object-cover w-[100px]"
                        src="images/img_rectangle21.png"
                        alt="rectangleTwentyOne"
                      />
                      <Img
                        className="h-[100px] md:h-auto object-cover w-[100px]"
                        src="images/img_image_14.png"
                        alt="image_One"
                      />
                      <Img
                        className="h-[100px] md:h-auto object-cover w-[100px]"
                        src="images/img_image_100x100.png"
                        alt="image_Two"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-3.5 items-start justify-start my-0 w-full">
                      <Img
                        className="h-[100px] md:h-auto object-cover w-[100px]"
                        src="images/img_image_16.png"
                        alt="image"
                      />
                      <Img
                        className="h-[100px] md:h-auto object-cover w-[100px]"
                        src="images/img_image_17.png"
                        alt="image_One"
                      />
                      <Img
                        className="h-[100px] md:h-auto object-cover w-[100px]"
                        src="images/img_image_15.png"
                        alt="image_Two"
                      />
                    </div>
                  </List>
                </div>
                <div className="flex flex-col font-josefinsans gap-5 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtJosefinSansRomanSemiBold20"
                  >
                    Tags
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
                    <div className="flex flex-col items-start justify-start px-2 w-full">
                      <Button className="border border-gray-500 border-solid cursor-pointer leading-[normal] min-w-[66px] py-1.5 rounded-[5px] text-base text-center text-gray-500 tracking-[-0.50px]">
                        Pillow
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1291px] mx-auto w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewaySemiBold40"
              >
                Other blogs
              </Text>
              <Text
                className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full"
                size="txtRubikRegular18Gray500"
              >
                We write various things related to furniture, from tips and what
                things I need to pay attention to when choosing furniture
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              {homepageCardblogPropList.map((props, index) => (
                <React.Fragment key={`HomepageCardblog${index}`}>
                  <HomepageCardblog
                    className="flex flex-1 flex-col gap-2 items-start justify-start w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
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

export default BlogDetailPage;
