import React from "react";
import { CAT_URL, LOGO_URL } from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleButtonClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="">
      <div className=" px-28 py-4 bg-gradient-to-b from-black w-full absolute z-10">
        <img alt="Logo" src={LOGO_URL} className="w-44" />
      </div>
      {user && (
        <div className="absolute z-10 flex top-0 right-0 my-4">
          <img src={CAT_URL} alt="cat" className="w-16 rounded-full " />
          <button
            className="text-white py-2 cursor-pointer font-mono font-bold"
            onClick={handleButtonClick}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
