import React from "react";
import heroLogo from "../../assets/hero-logo.svg";
import { RiListSettingsFill } from "react-icons/ri";
import { AiFillTrophy, AiTwotoneBank } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { BiSolidHelpCircle } from "react-icons/bi";
const ManualMainScreen = () => {
  return (
    <div className="min-h-screen min-w-full bg-[#1d1f23]">
      <header className="container mx-auto text-white bg-[#1d1f23] flex items-center justify-between p-2">
        <div className="flex items-center justify-center gap-2">
          <img src={heroLogo} alt="" className="w-10" />
          <h4 className="font-roboto_condensed text-xl font-bold">BUSTATRX</h4>
        </div>
        <div>
          <button className="bg-[#1d1f23] text-sm font-roboto_condensed font-bold px-6 py-2 rounded-md text-center">
            LOGIN
          </button>
          <button className="bg-[#eb7d2d] text-sm font-roboto_condensed font-bold px-6 py-2 rounded-md text-center">
            REGISTER
          </button>
        </div>
      </header>
      <main className="container mx-auto flex items-center justify-between ">
        <aside className="min-w-[280px] flex-grow min-h-screen  bg-[#26272a] text-white flex">
          <ul className="flex flex-col gap-2 h-96 min-w-full items-center justify-center bg-[#26272a] mt-4 py-2">
            <button className="flex items-center justify-start gap-2 bg-[#26272a]  hover:bg-[#2d2e30] transition-all duration-200 delay-200 w-[90%] px-2 py-2 rounded-md">
              <RiListSettingsFill />
              <h1 className="font-roboto_condensed font-bold">HOME</h1>
            </button>
            <button className="flex items-center justify-start gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
              <AiTwotoneBank />
              <h1 className="font-roboto_condensed font-bold">BANKROLL</h1>
            </button>
            <button className="flex items-center justify-start gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
              <BsCodeSlash />
              <h1 className="font-roboto_condensed font-bold">BACKTESTING</h1>
            </button>
            <button className="flex items-center justify-start gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
              <ImStatsDots />
              <h1 className="font-roboto_condensed font-bold">STATS</h1>
            </button>
            <button className="flex items-center justify-start gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
              <AiFillTrophy />
              <h1 className="font-roboto_condensed font-bold">LEADERBOARD</h1>
            </button>
            <button className="flex items-center justify-start gap-2 bg-[#26272a] w-[90%] hover:bg-[#2d2e30] transition-all duration-200 delay-200  px-2 py-2 rounded-md">
              <BiSolidHelpCircle />
              <h1 className="font-roboto_condensed font-bold">HELP</h1>
            </button>
          </ul>
        </aside>
        <div className="min-w-[80%] flex-grow  bg-blue-400 flex flex-col justify-between items-center">
          {/* upper-div-start-here */}
          <div className="bg-red-500   min-w-full"></div>

          {/* upper-div-end-here */}
          {/* middle-div-start */}
          <div className="bg-red"></div>
          {/* middle-div-end */}
          {/* lower-div-start */}
          <div className="bg-green-500 basis-52 min-w-full"></div>
          {/* lower-div-end */}
        </div>
      </main>
    </div>
  );
};

export default ManualMainScreen;
