import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ManualScreens from "./screens/ManualScreens/ManualScreens";
import ManualMainScreen from "./screens/ManualScreens/ManualMainScreen";

const NavHandler = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/" element={<ManualMainScreen />} /> */}
        <Route path="/manual/:screenOption?" element={<ManualScreens />} />
        {/* <Route path="/login" element={<SignUpScreen />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default NavHandler;
