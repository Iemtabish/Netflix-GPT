import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate.js";

const Login = () => { 
   const [isSigninForm, setisSigninform] = useState(true); /*Ni smj aya ye code*/

   const [errorMessege, setErrorMessege] =useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const messege = checkValidData(email.current.value , password.current.value)
      setErrorMessege(messege);

  }
 
  

  const toggleSignInForm = () => {
    {
      /*Ni smj aya ye code*/
    }
    setisSigninform(!isSigninForm);
    {
      /*Ni smj aya ye code*/
    }
  };

  return ( 
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_medium.jpg"
          alt="bg"
        />
      </div>

      <div className="absolute inset-20 flex items-center justify-center">
        <form onSubmit={(e) => e.preventDefault()}
        className="flex flex-col w-3/12 p-12 bg-black bg-opacity-60 rounded text-white">
        
          <h1 className="font-semibold py-6 text-white text-3xl">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSigninForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 mb-8 w-full bg-black bg-opacity-70 text-white border border-white border-opacity-40 rounded"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="p-4 mb-8 w-full bg-black bg-opacity-70 text-white border border-white border-opacity-40 rounded"
          />
          <input
          ref={password}
            type="password"
            placeholder="Password"
            className="p-4 mb-8 w-full bg-black bg-opacity-70 text-white border border-white border-opacity-40 rounded"
          />
          <p className="text-red-500 font-bold p-2" >{errorMessege}</p>
          <button onClick={handleButtonClick} className="p-4 mt-3 bg-red-600 w-full rounded-lg">
            "{isSigninForm ? "Sign In" : "Sign Up"}"
          </button>{" "}
          {/*Ni smj aya ye code*/}
          <p
            className="py-6 m-1 cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSigninForm
              ? "New to Netflix ? Sign Up Now"
              : "Already Registered ? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
