/* eslint-disable react/prop-types */
import React from "react";

const DataSection = ({ pokemonInfo }) => {
  const props = ["weight", "height", "base_experience"];

  console.log(pokemonInfo);

  const data = props.map((item) => {
    return {
      key: item,
      value: pokemonInfo[item],
    };
  });

  return (
    <section>
      {/* Description */}
      <div id="Description">
        <div className=" nes-container with-title is-dark is-centered">
          <h1 className="text-black title">Description</h1>
          {data.map(({ value, key }) => {
            if (typeof value === "object" && Array.isArray(value)) {
              return value.map((prop) => (
                <DivDescription key={prop.name}>{prop.name}</DivDescription>
              ));
            }
            return (
              <>
                <DivDescription key={value}>
                  <p>{key}</p>
                  <p className="text-yellow-600"> {value}</p>
                </DivDescription>
              </>
            );
          })}
        </div>
      </div>

      <div id="abilities" className="mt-12 ">
        <div className="nes-container with-title is-dark is-centered">
          <h1 className="text-black title">Abilities</h1>

          <DivDescription>
            {pokemonInfo.abilities.map((ability, key) => {
              return (
                <h1 className="text-yellow-500" key={key}>
                  {ability.ability.name}
                </h1>
              );
            })}
          </DivDescription>
        </div>
      </div>
    </section>
  );
};

export const DivDescription = ({ children }) => {
  return <div className="mt-5 text-left">{children}</div>;
};

export default DataSection;
