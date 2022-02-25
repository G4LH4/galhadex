import React, { useState, useEffect } from "react";
import { Link } from "wouter";

import MainDiv from "../MainDiv";
import getPokeData from "../../Services/FetchAPI";

// Sections
import SearchSection from "../SearchSection";
import DataSection from "../DataSection";

import Abilities from "../Abilities";

// images
import professorOakIMG from "../../Img/oak.png";
import exclamationPNG from "../../Img/exclamation.png";

const usePokemon = (searchTerm) => {
  const [poke, setPoke] = useState();
  const [pokeSelected, setPokeSelected] = useState(searchTerm);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (pokeSelected) {
      setLoading(true);
      getPokeData(pokeSelected.toLowerCase()).then((data) => {
        setPoke(data);
      });
      setLoading(false);
    }
  }, [pokeSelected]);

  return [poke, setPokeSelected, loading];
};

const Home = () => {
  const [poke, setPokeSelected] = usePokemon("");

  return (
    <div id="home">
      <MainDiv>
        <div className="h-full text-white bg-no-repeat bg-gradient-to-b from-bg1Color to-bg2Color">
          <Link to="/">
            <h1 className="m-3 text-black nes-pointer">Go back</h1>
          </Link>

          <div className="">
            {/* <img src={professorOakIMG} className="mx-auto mt-10 " /> */}

            {/* <div
              className={`mx-auto mb-10 flex  bg-red-600  nes-container with-title`}
            >
              <div className="mr-10">
                <SearchSection actionSearch={setPokeSelected} />
                {poke && <InfoPokemonSearched pokemonInfo={poke} />}
              </div>

              <div>
                {poke && <DataSection pokemonInfo={poke} />}
                {poke && <Abilities poke={poke} />}
              </div>
            </div> */}
          </div>

          {/* <img
            src={exclamationPNG}
            className=" animate-bounce nes-pointer"
            onClick={handleClick}
          /> */}
        </div>
      </MainDiv>
    </div>
  );
};

const InfoPokemonSearched = ({ pokemonInfo }) => {
  return (
    <div className=" nes-container is-dark with-title is-centered">
      <p className="text-black title">
        {pokemonInfo.name ? pokemonInfo.name : "Pokemon"}
      </p>

      <section id="image-container" className="mx-auto ">
        <img
          src={pokemonInfo?.sprites?.front_default}
          className="w-3/5 mx-auto mt-10"
        />
      </section>
    </div>
  );
};

export default Home;
