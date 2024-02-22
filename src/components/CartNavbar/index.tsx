import React from "react";

import { Img, SelectBox, Text } from "components";
import { Link } from "react-router-dom";

type CartNavbarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;


const CartNavbar: React.FC<CartNavbarProps> = (props) => {
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
          <Link to={"/"}
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              
            >
              Home
            </Link>
            <Link to={"/shop"}
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
            >
              Shop
            </Link>
            <Link to={"/blog"}
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
            >
              Blog
            </Link>
            <Link to={"/aboutus"}
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
            >
              About
            </Link>
            <Link to={"/contactus"}
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
            >
              Contact
            </Link>
            <Link to={"/team"}
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
            >
              Team
            </Link>
          </div>
          <Link to={"/cart"}>
            <Img
            className="h-6 sm:hidden w-[132px]"
            src="images/img_icon.svg"
            alt="icon"
          />
          </Link>
          
        </div>
      </header>
    </>
  );
};

CartNavbar.defaultProps = {};

export default CartNavbar;
