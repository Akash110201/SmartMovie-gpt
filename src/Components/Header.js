import React from "react";
import { LOGO_URL } from "../Utils/constants";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-black">
      <img src={LOGO_URL} className="w-32" />
    </div>
  );
};

export default Header;
