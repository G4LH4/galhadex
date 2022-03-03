import React from "react";
import { DivDescription } from "./DataSection";

const Abilities = ({ poke }) => {
  return (
    <div id="types" className="mt-12 ">
      <div className="nes-container with-title is-dark is-centered">
        <h1 className="text-black title">Types</h1>

        <DivDescription>
          {poke.types.map((type, key) => {
            return (
              <h1 className="text-yellow-500" key={key}>
                {type.type.name}
              </h1>
            );
          })}
        </DivDescription>
      </div>
    </div>
  );
};

export default Abilities;
