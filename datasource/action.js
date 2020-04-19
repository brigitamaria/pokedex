import { BASE_URL } from "./url";
import { getNextAndResult, getPokemonData } from "./services";

export const initialFetch = async () => {
  const url = `${BASE_URL}/pokemon`;
  const { next, results } = await getNextAndResult(url);

  let pokemons = [];
  await Promise.all(getPokemonData(results)).then((results) => {
    pokemons = results;
  });

  return { pokemons, next };
};

export const fetchNext = async (renderedNext, renderedPokemons, setRenderedPokemons, setRenderedNext) => {
  const { next, results } = await getNextAndResult(renderedNext);

  await Promise.all(getPokemonData(results)).then((results) => {
    const final = [...renderedPokemons, ...results];
    setRenderedPokemons(final);
  });

  setRenderedNext(next);
};
