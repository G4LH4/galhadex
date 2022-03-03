/* eslint-disable react/prop-types */
import React, { useState } from "react";

const SearchSection = ({ actionSearch }) => {
  const [currentText, setCurrentText] = useState("");
  const handleChange = (e) => {
    setCurrentText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    actionSearch((prev) => {
      return currentText;
    });
  };

  return (
    <section className={`h-fit   bg-red-600  with-title`}>
      <p className="text-black title">Search pokemon</p>
      <div id="input" className="mb-20 nes-container ">
        <input
          type="text"
          id="dark_field"
          className="text-black nes-input"
          onChange={handleChange}
          value={currentText}
        />
        <button
          type="button"
          className="mt-3 nes-btn w-fit is-primary"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchSection;
