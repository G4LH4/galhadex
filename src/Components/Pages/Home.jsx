import React, { useState } from "react";

import MainDiv from "../MainDiv";
import getPokeData from "../../Services/FetchAPI";

const Home = () => {
  const [inputData, setData] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState([]);

  const getPokemon = async (pokeSelected) => {
    const data = await getPokeData(pokeSelected);

    console.log(data);
    setPokemonInfo(data);
  };

  return (
    <div id="home">
      <MainDiv>
        <div className="h-full text-white bg-no-repeat bg-rainforest">
          <div className="nes-field is-inline">
            <div
              className={`mx-auto  ${
                pokemonInfo?.name ? "m-5" : "mt-20"
              } bg-red-500 nes-container with-title`}
            >
              <p className="text-black title">Search pokemon</p>

              <div id="input" className="flex">
                <input
                  type="text"
                  id="dark_field"
                  className="text-black nes-input"
                  onChange={(e) => setData(e.target.value)}
                />
                <button
                  type="button"
                  className="nes-btn w-fit is-primary"
                  onClick={() => getPokemon(inputData.toLowerCase())}
                >
                  Search
                </button>
              </div>

              <div className="mt-20 nes-container with-title is-centered">
                <p className="text-black title">
                  {pokemonInfo.name ? pokemonInfo.name : "Pokemon"}
                </p>

                <section id="image-container" className="w-2/4 mx-auto ">
                  {" "}
                  <img
                    src={pokemonInfo?.sprites?.front_default}
                    className="w-full mx-auto"
                  />
                </section>
              </div>

              <div className="mt-20 nes-container with-title is-centered">
                <p className="text-black title">Description</p>
                <PDescription>
                  {" "}
                  {pokemonInfo?.height ? `Height: ${pokemonInfo.height}` : ""}
                </PDescription>
                <PDescription>
                  {pokemonInfo?.weight ? `Weight: ${pokemonInfo.weight}` : ""}
                </PDescription>
              </div>
            </div>
          </div>
        </div>
      </MainDiv>
    </div>
  );
};

const PDescription = ({ children }) => {
  return <p className="text-left">{children}</p>;
};

export default Home;
