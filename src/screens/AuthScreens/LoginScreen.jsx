import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { BsArrowLeft } from "react-icons/bs";
const LoginScreen = () => {
  const [isError, setIsError] = useState(false);
  const [isInitialPage, setIsInitialPage] = useState(false);
  return (
    <div className="min-w-full min-h-screen z-20 absolute bg-blue-600 flex items-center justify-center ">
      <div className="w-[450px]  bg-[#26272b] text-white flex flex-col items-center justify-start relative">
        {/* cross-button */}
        <button className="absolute right-3 top-3">
          <RxCross2 size={25} />
        </button>
        {/* cross-button */}
        <h1 className="font-roboto_condensed my-4 mt-8 font-bold ">
          CREATE AN ACCOUNT
        </h1>
        {isInitialPage ? (
          <>
            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                setIsError((e) => !e);
              }}
            >
              {/* input-start */}
              <label className="flex flex-colitems-center justify-center">
                <div
                  className="flex flex-col items-start justify-evenly
              w-[350px]
            "
                >
                  <h5 className="font-roboto_condensed text-xs mb-1">Email</h5>
                  <div
                    className={`flex items-center justify-between  gap-0 bg-[#2f3034] w-[100%] h-11 rounded ${
                      isError ? "border border-red-600" : ""
                    }`}
                  >
                    <MdEmail size={20} className="w-8 h-7 mx-2" />
                    <input
                      type="text"
                      className=" rounded-sm bg-[#1d1f23] text-sm w-[88%] h-10 pl-2 mx-1 !outline-none"
                      placeholder="Please enter email address"
                    />
                  </div>
                </div>
              </label>
              {isError && (
                <h2 className="text-red-600 text-xs">
                  Please enter a valid email address
                </h2>
              )}
              {/* input-end */}
              {/* input-start */}
              <label className="flex flex-colitems-center justify-center">
                <div
                  className="flex flex-col items-start justify-evenly
              w-[350px]  
            "
                >
                  <h5 className="font-roboto_condensed text-xs mb-1">
                    Username
                  </h5>
                  <div
                    className={`flex items-center justify-between  gap-0 bg-[#2f3034] w-[100%] h-11 rounded ${
                      isError ? "border border-red-600" : ""
                    }`}
                  >
                    <MdEmail size={20} className="w-8 h-7 mx-2" />
                    <input
                      type="text"
                      className=" rounded-sm bg-[#1d1f23] text-sm w-[88%] h-10 pl-2 mx-1"
                      placeholder="Please enter username"
                    />
                  </div>
                </div>
              </label>
              {isError && (
                <h2 className="text-red-600 text-xs">
                  Your username must be at least 3 characters long
                </h2>
              )}
              {/* input-end */}
              {/* input-start */}
              <label className="flex flex-colitems-center justify-center">
                <div
                  className="flex flex-col items-start justify-evenly
              w-[350px]  
            "
                >
                  <h5 className="font-roboto_condensed text-xs mb-1">
                    Profession
                  </h5>
                  <div
                    className={`flex items-center justify-between  gap-0 bg-[#2f3034] w-[100%] h-11 rounded ${
                      isError ? "border border-red-600" : ""
                    }`}
                  >
                    <MdEmail size={20} className="w-8 h-7 mx-2" />
                    <input
                      type="text"
                      className=" rounded-sm bg-[#1d1f23] text-sm w-[88%] h-10 pl-2 mx-1"
                      placeholder="Please enter your profession"
                    />
                  </div>
                </div>
              </label>
              {isError && (
                <h2 className="text-red-600 text-xs">
                  Your Profession must be at least 6 characters long
                </h2>
              )}
              {/* input-end */}
              {/* input-start */}
              <label className="flex flex-colitems-center justify-center">
                <div
                  className="flex flex-col items-start justify-evenly
              w-[350px]  
            "
                >
                  <h5 className="font-roboto_condensed text-xs mb-1">
                    Password
                  </h5>{" "}
                  <div
                    className={`flex items-center justify-between  gap-0 bg-[#2f3034] w-[100%] h-11 rounded ${
                      isError ? "border border-red-600" : ""
                    }`}
                  >
                    <MdEmail size={20} className="w-8 h-7 mx-2" />
                    <input
                      type="text"
                      className=" rounded-sm bg-[#1d1f23] text-sm w-[88%] h-10 pl-2 mx-1"
                      placeholder="Please enter password"
                    />
                  </div>
                </div>
              </label>
              {isError && (
                <h2 className="text-red-600 text-xs">
                  Your Password must be at least 8 characters long
                </h2>
              )}
              {/* input-end */}
              {/* input-start */}
              <label className="flex flex-colitems-center justify-center">
                <div
                  className="flex flex-col items-start justify-evenly
              w-[350px]  
            "
                >
                  <h5 className="font-roboto_condensed text-xs mb-1">
                    Confirm Password
                  </h5>
                  <div
                    className={`flex items-center justify-between  gap-0 bg-[#2f3034] w-[100%] h-11 rounded ${
                      isError ? "border border-red-600" : ""
                    }`}
                  >
                    <MdEmail size={20} className="w-8 h-7 mx-2" />
                    <input
                      type="text"
                      className=" rounded-sm bg-[#1d1f23] text-sm w-[88%] h-10 pl-2 mx-1"
                      placeholder="Please enter confirm password"
                    />
                  </div>
                </div>
              </label>
              {isError && (
                <h2 className="text-red-600 text-xs">
                  Confirm password must match with the password
                </h2>
              )}
              {/* input-end */}
              <button
                className="bg-[#eb7d2d] w-[350px] h-10 rounded my-4"
                type="submit"
              >
                Continue
              </button>
            </form>
          </>
        ) : (
          // eula-start
          <>
            <div className="flex flex-row items-center justify-center  w-[75%] relative mb-2">
              <button className="absolute left-0">
                <BsArrowLeft className="" />
              </button>
              <h4 className="text-xs ">
                Read and accept the terms and conditions
              </h4>
            </div>
            <div className="h-[280px] bg-[#1d1f23] w-[75%] overflow-x-scroll text-xs font-roboto_condensed p-4 font-extralight">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface
              without relying on meaningful content. Lorem ipsum is a
              placeholder text commonly used to demonstrate the visual form of a
              document or a typeface without relying on meaningful content.
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface
              without relying on meaningful content. Lorem ipsum is a
              placeholder text commonly used to demonstrate the visual form of a
              document Lorem ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document or a typeface without
              relying on meaningful content. Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document Lorem
              ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document
            </div>
            <div className="w-[75%] flex flex-col gap-2 mt-3">
              <label className="flex items-center justify-start gap-2 ">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="accent-[#eb7d2d] bg-[#26272b] form-checkbox focus:outline-none focus-visible:outline-none focus:ring-offset-0"
                />
                <h4 className="text-xs">I accept that I am 18+</h4>
              </label>
              <label className="flex items-center justify-start gap-2 ">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="accent-[#eb7d2d] bg-[#26272b] form-checkbox focus:outline-none focus-visible:outline-none focus:ring-offset-0"
                />
                <h4 className="text-xs">
                  I have read and agree to the terms and conditions.
                </h4>
              </label>
            </div>
            <button
              className="bg-[#eb7d2d] w-[75%] h-10 rounded my-4"
              type="submit"
            >
              PLAY NOW
            </button>
          </>
          // eula-end
        )}
        <h3 className="text-xs my-3">
          Already have an account?{" "}
          <span className="text-[#EB7D2D]"> Log In</span>
        </h3>
        <div className="flex gap-4 my-4">
          <div
            className={`${
              !isInitialPage ? "bg-[#FFFFFF]" : "bg-[#EB7D2D]"
            } h-2 w-2 rounded-full`}
            onClick={() => setIsInitialPage(true)}
          ></div>
          <div
            className={`${
              isInitialPage ? "bg-[#FFFFFF]" : "bg-[#EB7D2D]"
            } h-2 w-2 rounded-full`}
            onClick={() => setIsInitialPage(false)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
