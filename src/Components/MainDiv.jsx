/* eslint-disable react/prop-types */
import React from "react";

const MainDiv = ({ children }) => {
  return (
    <div className="flex flex-col w-2/3 h-screen mx-auto bg-black border-4 border-borderColor">
      <span className="w-full p-5 bg-headerColor" />

      {children}

      <div
        id="bottom"
        className="flex p-5 text-center text-white bg-bottomColor"
      >
        <h1 className="mx-auto mt-auto text-2xl"> © 2022 GALHA inc</h1>

        <a href="https://github.com/G4LH4" target="_BLANK" rel="noreferrer">
          {" "}
          <i className="nes-icon github is-medium " />
        </a>
      </div>
    </div>
  );
};

export default MainDiv;
