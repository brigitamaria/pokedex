import fetch from "node-fetch";

export const fetchData = async (url) => {
  const data = await fetch(url);
  return await data.json();
};

export const getNextAndResult = async (url) => {
  const { next, results } = await fetchData(url);
  return { next, results };
};

export const getPokemonData = (results) => {
  return results.map(async ({ name, url }) => {
    const { types, ...data } = await fetchData(url);
    const typeNames = await types.map((type) => {
      return type.type.name;
    });
    return { name, type: typeNames, ...data };
  });
};
