import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PokemonDetailHeader from "./PokemonDetailHeader";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
}));

const PokemonDetail = ({ selectedPokemon }) => {
  const classes = useStyles();
  const {
    name,
    type = [],
    base_experience,
    height,
    weight,
    abilities = [],
    forms = [],
    held_items = [],
    moves = [],
    sprites = { front_default: "" },
  } = selectedPokemon;
  const ability = abilities.map((ability) => ability.ability.name);
  const form = forms.map((form) => form.name);
  const items = held_items.map((item) => item.name);
  const move = moves.map((move) => move.move.name);
  const tableData = { ability, move, form, items };

  return (
    <>
      {selectedPokemon ? (
        <Paper>
          <PokemonDetailHeader name={name} type={type} baseXP={base_experience} weight={weight} height={height} pic={sprites.front_default} />
          <CardContent>
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableBody>
                  {Object.keys(tableData).map((key) => (
                    <TableRow key={key}>
                      <TableCell component="th" scope="row">
                        {key}
                      </TableCell>
                      <TableCell align="right">{tableData[key].length === 0 ? "-" : tableData[key].join(", ")}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Paper>
      ) : (
        <></>
      )}
    </>
  );
};

export default PokemonDetail;
