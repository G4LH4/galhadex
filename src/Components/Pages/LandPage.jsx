import React from "react";
import { useLocation } from "wouter";

import MainDiv from "../MainDiv";
import MainTextIMG from "../../Img/Galhadex.png";
import charizardIMG from "../../Img/charizard.gif";

const LandPage = () => {
  const [location, setLocation] = useLocation();

  return (
    <div id="landPage">
      <MainDiv>
        <div id="main-content" className="flex h-screen bg-hell ">
          <div className="w-2/4 ">
            <img src={MainTextIMG} className="w-full " />
          </div>
        </div>

        <div className="flex">
          <h1
            onClick={() => {
              setLocation("/home");
            }}
            className="p-10 mt-auto ml-10 text-4xl text-white animate-pulse nes-pointer"
          >
            Press click
          </h1>
          <img src={charizardIMG} className="absolute w-1/3 right-60 top-72" />
        </div>
      </MainDiv>
    </div>
  );
};

export default LandPage;
