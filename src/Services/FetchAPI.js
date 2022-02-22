const getPokeData = async (pokeSelected) => {
  const defaultUrl = "https://pokeapi.co/api/v2/";

  const data = await fetchAPI(`${defaultUrl}pokemon/${pokeSelected}`);

  return data;
};

async function fetchAPI(url) {
  const fetchURL = await fetch(url);
  const dataJSON = await fetchURL.json();

  return dataJSON;
}

export default getPokeData;
