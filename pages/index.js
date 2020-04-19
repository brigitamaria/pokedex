import Head from "next/head";
import { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import PokemonCardsContainer from "../components/pokemon/PokemonCardsContainer";
import PokemonDetail from "../components/pokemon/PokemonDetail/PokemonDetail";
import { fetchNext, initialFetch } from "../datasource/action";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    maxWidth: "50%",
    margin: "auto",
  },
}));

function Home({ pokemons, next }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [renderedPokemons, setRenderedPokemons] = useState(pokemons);
  const [renderedNext, setRenderedNext] = useState(next);

  const handleCloseFilter = (value, event) => {
    if (!value && selectedFilter) {
      setSelectedFilter(selectedFilter);
    } else setSelectedFilter(value);
    setAnchorEl(null);
  };
  const handleClickFilter = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };
  const handleScroll = async () => {
    if (renderedNext && window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      await fetchNext(renderedNext, renderedPokemons, setRenderedPokemons, setRenderedNext);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="container">
      <Head>
        <title>Pokédex</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <main>
        <Header
          handleClose={handleCloseFilter}
          handleClick={handleClickFilter}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          anchorEl={anchorEl}
        />

        <div className="pokedexContainer">
          <Grid container spacing={4}>
            <PokemonCardsContainer pokemons={renderedPokemons} selectedFilter={selectedFilter} setSelectedPokemon={setSelectedPokemon} />
            {selectedPokemon && (
              <Modal className={classes.modal} open={true} onClose={handleCloseModal}>
                <PokemonDetail selectedPokemon={selectedPokemon} />
              </Modal>
            )}
          </Grid>
        </div>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }

        .pokedexContainer {
          padding: 96px 64px;
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const { pokemons, next } = await initialFetch();
  return {
    props: { pokemons, next },
  };
}

export default Home;
