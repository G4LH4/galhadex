import React, { useState, useEffect } from "react";
import { Link } from "wouter";

import MainDiv from "../MainDiv";
import getPokeData from "../../Services/FetchAPI";

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
  return (
    <div id="home">
      <MainDiv>
        <div className="h-full text-white bg-gray-200">
          <div className="flex">
            <Link href="/" className="text-xs bg-spanColor ">
              Go back
            </Link>
            <Borders>
              <h1 className="text-4xl text-center">ÍNDICE DE LA POKéDEX</h1>
            </Borders>
          </div>

          <div>
            <SectionsSearch title={"Las Pokédex "} classOfSearch="numérico" />
            <SectionsSearch title={"buscar"} classOfSearch="bla" />
          </div>
        </div>

        <Borders />
      </MainDiv>
    </div>
  );
};

const Borders = ({ children }) => {
  return <div className="w-full p-5 bg-spanColor">{children}</div>;
};

const SectionsSearch = ({ title, classOfSearch }) => {
  return (
    <div className="p-5">
      <h1 className="mt-10 text-4xl text-orange-600">{title.toUpperCase()}</h1>
      <h2 className="mt-3 ml-5 text-3xl text-black">
        {classOfSearch.toUpperCase()}
      </h2>
    </div>
  );
};

export default Home;
