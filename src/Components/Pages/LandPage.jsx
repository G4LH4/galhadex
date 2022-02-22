import React from "react";
import { useLocation } from "wouter";

import MainDiv from "../MainDiv";
import MainTextIMG from "../../Img/Galhadex.png";
import charizardIMG from "../../Img/charizard.gif";

import IntroAudio from "../../Sounds/Intro.mp3";

const LandPage = () => {
  const [location, setLocation] = useLocation();

  return (
    <div id="landPage">
      <MainDiv sound={IntroAudio}>
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
            className="mt-10 ml-10 text-4xl text-white animate-pulse"
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
