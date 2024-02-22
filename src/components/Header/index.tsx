import React from "react";

import { Img, SelectBox, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row ">
            <Img
              className="h-[30px] w-[90px]"
              src="images/img_car.svg"
              alt="car"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-row gap-9 sm:hidden items-center justify-between w-[498px] sm:w-full">
            <SelectBox
              className="font-rubik leading-[normal] text-black-900 text-left text-lg tracking-[-0.50px] w-[17%] sm:w-full"
              placeholderClassName="text-black-900"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="frameFour"
              options={homeOptionsList}
              isSearchable={false}
              placeholder="Home"
            />
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              Shop
            </Text>
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              Blog
            </Text>
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              About
            </Text>
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              Contact
            </Text>
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              Team
            </Text>
          </div>
          <Img
            className="h-6 sm:hidden w-[132px]"
            src="images/img_icon.svg"
            alt="icon"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
