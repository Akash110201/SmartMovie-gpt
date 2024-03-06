import React, { useRef, useState } from "react";
import { BANNER_URL } from "../Utils/constants";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black rounded-lg w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-70"
      >
        <h1 className="font-bold text-white text-3xl py-4">Sign In</h1>
        {/**Show this when on sign up */}
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="email"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="text"
          placeholder="password"
          className="p-2 my-2 w-full  bg-gray-700"
        />
        <p className="text-red-500 font-bold font-sans">{errorMessage}</p>
        <button
          className="bg-red-500 text-white p-4 my-4 w-full"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
