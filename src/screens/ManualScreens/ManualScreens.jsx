import React from "react";
import ManualImage from "../../assets/SigninAssets/Manual.png";
import LoginScreen from "../AuthScreens/LoginScreen";
const ManualScreens = () => {
  return (
    <div className="min-h-screen min-w-full bg-blue-600">
      <LoginScreen />
      <img src={ManualImage} alt="" />
    </div>
  );
};

export default ManualScreens;
