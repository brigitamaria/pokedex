import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const PokemonCard = ({ pokemon, setSelectedPokemon }) => {
  const {
    name,
    type,
    base_experience,
    sprites: { front_default },
  } = pokemon;
  return (
    <Card>
      <CardActionArea
        onClick={() => {
          setSelectedPokemon(pokemon);
        }}
      >
        <CardMedia component="img" alt={name} height="140" image={front_default} title={name} />
        <CardContent>
          <Grid container spacing={1}>
            {type.map((t, i) => {
              return (
                <Grid key={i} item>
                  <Chip size="small" color="secondary" variant="outlined" label={t} />
                </Grid>
              );
            })}
          </Grid>

          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Base XP: {base_experience}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
