import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import PokemonCard from "./PokemonCard";

const PokemonCardsContainer = ({ pokemons, selectedFilter, setSelectedPokemon }) => {
  let renderedResults = pokemons;
  if (selectedFilter) {
    renderedResults = pokemons.filter((result) => {
      if (result.type.indexOf(selectedFilter) !== -1) {
        return result;
      }
    });
  }
  if (renderedResults.length > 0) {
    return renderedResults.map((result, i) => {
      return (
        <Grid item xs={2} key={i}>
          <PokemonCard pokemon={result} setSelectedPokemon={setSelectedPokemon} />
        </Grid>
      );
    });
  } else {
    return (
      <Typography gutterBottom variant="h5" component="h2">
        There's no {selectedFilter} pokémon
      </Typography>
    );
  }
};

export default PokemonCardsContainer;
