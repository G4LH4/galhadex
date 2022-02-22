import React from "react";

const MainDiv = ({ children }) => {
  return (
    <div className="w-2/3  border-4 border-borderColor rounded-xl mx-auto h-screen flex flex-col bg-black">
      <span className="bg-headerColor p-5 w-full" />
      <span className="bg-black p-10 w-full" />

      {children}

      <div
        id="bottom"
        className="bg-bottomColor text-center flex text-white p-5"
      >
        <h1 className="text-2xl mx-auto mt-auto"> © 2022 GALHA inc</h1>
        <a href="https://github.com/G4LH4" target="_BLANK" rel="noreferrer">
          {" "}
          <i className="nes-icon github is-medium " />
        </a>
      </div>
    </div>
  );
};

export default MainDiv;
