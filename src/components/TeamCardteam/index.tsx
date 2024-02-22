import React from "react";

import { Button, Img, Text } from "components";

type TeamCardteamProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "rectangle1487"
  | "linkedin"
  | "facebook"
  | "twitter"
  | "makejhane"
  | "financemanager"
> &
  Partial<{
    rectangle1487: string;
    linkedin: string;
    facebook: string;
    twitter: string;
    makejhane: string;
    financemanager: string;
  }>;

const TeamCardteam: React.FC<TeamCardteamProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[30px] items-center justify-start w-full">
          <div className="h-[450px] relative w-full">
            <Img
              className="md:h-[450px] h-full m-auto object-cover w-full"
              alt="rectangle1487"
              src={props?.rectangle1487}
            />
            <div className="absolute bottom-[5%] flex flex-row gap-[25px] inset-x-[0] items-center justify-center mx-auto w-auto">
              {!!props?.linkedin ? (
                <Button className="bg-yellow-100 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] w-[50px]">
                  <Img className="h-6" alt="linkedin" src={props?.linkedin} />
                </Button>
              ) : null}
              {!!props?.facebook ? (
                <Button className="bg-gray-53 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] w-[50px]">
                  <Img className="h-6" alt="facebook" src={props?.facebook} />
                </Button>
              ) : null}
              {!!props?.twitter ? (
                <Button className="bg-gray-53 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] w-[50px]">
                  <Img className="h-6" alt="twitter" src={props?.twitter} />
                </Button>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center tracking-[-0.50px] w-full"
              size="txtRalewayRomanBold32Black900"
            >
              {props?.makejhane}
            </Text>
            <Text
              className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full"
              size="txtRubikRegular18Gray500"
            >
              {props?.financemanager}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TeamCardteam.defaultProps = {
  rectangle1487: "images/img_rectangle1487.png",
  makejhane: "Make Jhane",
  financemanager: "Finance Manager",
};

export default TeamCardteam;
