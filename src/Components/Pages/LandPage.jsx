import React from "react";
import { useLocation } from "wouter";

import MainDiv from "../MainDiv";
import MainTextIMG from "../../Img/Galhadex.png";
import charizardIMG from "../../Img/charizard.gif";

const LandPage = () => {
  const [location, setLocation] = useLocation();

  return (
    <div
      id="landPage"
      onClick={() => {
        setLocation("/home");
      }}
    >
      <MainDiv>
        <div id="main-content" className="bg-hell  h-screen">
          <div className="w-2/4 ">
            <img src={MainTextIMG} className=" w-full" />
          </div>
        </div>

        <div className="flex">
          <div className="bg-black w-full p-20">
            <h1 className="text-4xl text-white animate-pulse">Press click</h1>
          </div>
          <img
            src={charizardIMG}
            className="w-1/3 absolute  right-60  top-72"
          />
        </div>
      </MainDiv>
    </div>
  );
};

export default LandPage;
