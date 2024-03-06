import React from "react";
import { LOGO_URL } from "../Utils/constants";

const Header = () => {
  return (
    <div className=" px-28 py-4 bg-gradient-to-b from-black w-full absolute z-10">
      <img alt="Logo" src={LOGO_URL} className="w-44" />
    </div>
  );
};

export default Header;
