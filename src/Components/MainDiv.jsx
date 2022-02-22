import React, { useEffect, useMemo, useState } from "react";

import volumeOn from "../Img/volumeOn.png";
import volumeOff from "../Img/volumeOff.png";

const MainDiv = ({ children, sound }) => {
  const [toggle, setToggle] = useState(false);

  const audio = useMemo(() => new Audio(sound), [sound]);

  useEffect(() => {
    if (toggle) {
      audio.loop = true;
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [toggle]);
  return (
    <div className="flex flex-col w-2/3 h-screen mx-auto bg-black border-4 border-borderColor rounded-xl">
      <span className="w-full p-5 bg-headerColor" />
      <span className="w-full p-10 bg-black" />

      {children}

      <span className="w-full p-5 bg-black" />

      <div
        id="bottom"
        className="flex p-5 text-center text-white bg-bottomColor"
      >
        <img
          src={`${toggle ? volumeOn : volumeOff}`}
          className="w-14"
          onClick={() => setToggle(!toggle)}
        />

        <h1 className="mx-auto mt-auto text-2xl"> © 2022 GALHA inc</h1>

        <a href="https://github.com/G4LH4" target="_BLANK" rel="noreferrer">
          {" "}
          <i className="nes-icon github is-medium " />
        </a>
      </div>
    </div>
  );
};

const playAudio = (sound) => {
  const audio = new Audio(sound);

  audio.loop = true;
  audio.play();
};

export default MainDiv;
