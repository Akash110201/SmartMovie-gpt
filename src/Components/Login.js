import React from "react";
import { BANNER_URL } from "../Utils/constants";
import Header from "./Header";

const Login = () => {
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          alt="banner"
          src={BANNER_URL}
          className="h-screen w-screen object-cover"
        />
      </div>
      <form className="absolute p-12 bg-black rounded-lg w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-70">
        <h1 className="font-bold text-white text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="email"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="password"
          className="p-2 my-2 w-full  bg-gray-700"
        />
        <button className="bg-red-500 text-white p-4 my-4 w-full">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
