import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "12px",
  },
}));
const PokemonTypes = ({ type }) => {
  const classes = useStyles();
  return (
    <Grid container direction="row" spacing={1} classes={classes}>
      {type.map((t, i) => {
        return (
          <Grid key={i} item>
            <Chip size="small" color="secondary" variant="outlined" label={t} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PokemonTypes;
