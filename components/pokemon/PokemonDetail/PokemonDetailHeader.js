import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PokemonTypes from "../PokemonTypes";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
  },
}));
const PokemonDetailHeader = ({ name, type, baseXP, weight, height, pic }) => {
  const classes = useStyles();
  return (
    <CardContent>
      <Grid container direction="row">
        <CardMedia classes={{ img: classes.img }} component="img" alt={name} height="140" image={pic} title={name} />
        <Grid item alignItems="center" margin="auto 0">
          <PokemonTypes type={type} />
          <Typography gutterBottom variant="h4" component="h2">
            {name}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Base XP: {baseXP} | Weight: {weight} hg, Height: {height} dm
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default PokemonDetailHeader;
