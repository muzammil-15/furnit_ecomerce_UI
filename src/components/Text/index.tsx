import React from "react";

const sizeClasses = {
  txtRalewaySemiBold20: "font-raleway font-semibold",
  txtRubikSemiBold14: "font-rubik font-semibold",
  txtRalewayBold40: "font-bold font-raleway",
  txtRubikSemiBold18: "font-rubik font-semibold",
  txtRubikRegular14WhiteA700: "font-normal font-rubik",
  txtJosefinSansRomanSemiBold20: "font-josefinsans font-semibold",
  txtRalewayRomanBold40: "font-bold font-raleway",
  txtRalewayRomanBold48: "font-bold font-raleway",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtJosefinSansRomanBold24Gray500: "font-bold font-josefinsans",
  txtRalewayRomanRegular20Black900: "font-normal font-raleway",
  txtPlusJakartaSansRomanSemiBold14: "font-plusjakartasans font-semibold",
  txtRalewayRomanRegular24: "font-normal font-raleway",
  txtRalewayRomanSemiBold24: "font-raleway font-semibold",
  txtRalewayRomanRegular20: "font-normal font-raleway",
  txtRalewayRomanSemiBold20: "font-raleway font-semibold",
  txtRalewayRomanRegular24Bluegray900: "font-normal font-raleway",
  txtRubikBold36: "font-bold font-rubik",
  txtRalewayRomanSemiBold20Gray53: "font-raleway font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtRubikRegular16: "font-normal font-rubik",
  txtRubikRegular16Gray50a3: "font-normal font-rubik",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtRalewayRomanBold40Gray53: "font-bold font-raleway",
  txtRubikRegular18: "font-normal font-rubik",
  txtRubikRegular12: "font-normal font-rubik",
  txtPoppinsRegular14Black9007f1: "font-normal font-poppins",
  txtRubikRegular14: "font-normal font-rubik",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular16Gray500: "font-normal font-poppins",
  txtRalewayRomanBold32: "font-bold font-raleway",
  txtRubikRomanRegular18: "font-normal font-rubik",
  txtRubikRegular16Gray53: "font-normal font-rubik",
  txtRalewayRomanBold32Black900: "font-bold font-raleway",
  txtRalewayRomanBold32Gray53: "font-bold font-raleway",
  txtRubikRomanRegular16: "font-normal font-rubik",
  txtRalewayRomanBold36: "font-bold font-raleway",
  txtRalewayRomanSemiBold18: "font-raleway font-semibold",
  txtRubikRomanRegular20: "font-normal font-rubik",
  txtRubikRegular12Black9007f: "font-normal font-rubik",
  txtJosefinSansRomanBold24: "font-bold font-josefinsans",
  txtRubikSemiBold18Bluegray900: "font-rubik font-semibold",
  txtRubikRegular18WhiteA700: "font-normal font-rubik",
  txtRalewayBold24: "font-bold font-raleway",
  txtRalewaySemiBold40: "font-raleway font-semibold",
  txtRubikRegular24: "font-normal font-rubik",
  txtRubikRegular14Black900: "font-normal font-rubik",
  txtRubikRegular20: "font-normal font-rubik",
  txtRalewayBold36Black900: "font-bold font-raleway",
  txtRubikRegular14Gray50a3: "font-normal font-rubik",
  txtRalewayRomanBold20: "font-bold font-raleway",
  txtRubikSemiBold18Yellow100: "font-rubik font-semibold",
  txtRalewayRomanBold18: "font-bold font-raleway",
  txtPoppinsSemiBold20DeeporangeA400: "font-poppins font-semibold",
  txtRalewayRomanBold16: "font-bold font-raleway",
  txtPollerOneRegular40: "font-normal font-pollerone",
  txtRubikRegular18Gray53: "font-normal font-rubik",
  txtRubikSemiBold18DeeporangeA400: "font-rubik font-semibold",
  txtPoppinsBold20: "font-bold font-poppins",
  txtRalewayRomanBold20WhiteA700: "font-bold font-raleway",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtRalewayBold36: "font-bold font-raleway",
  txtRubikRegular18Gray500: "font-normal font-rubik",
  txtRubikRegular18Bluegray900: "font-normal font-rubik",
  txtRalewayRomanSemiBold20Gray900: "font-raleway font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
