import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
  },
  outlined: {
    color: "white",
    fontStyle: "italic",
  },
  paper: {
    maxHeight: "250px",
  },
}));

const renderFilter = (handleClose) => {
  const types = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
  ];

  return types.map((type, i) => {
    return (
      <MenuItem key={i} onClick={handleClose.bind(null, type)}>
        {type}
      </MenuItem>
    );
  });
};

const Header = ({ handleClose, handleClick, selectedFilter, setSelectedFilter, anchorEl }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar classes={{ root: classes.root }}>
        <Link href="/">
          <Typography variant="h6">Pokédex </Typography>
        </Link>

        <Box display="flex" flexDirection="row" alignItems="center" width={"200px"}>
          <Typography variant="caption">Filter By:</Typography>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start">
            <Button classes={{ outlined: classes.outlined }} aria-haspopup="true" onClick={handleClick} variant="outlined" color="primary">
              {selectedFilter ? selectedFilter : "SELECT ONE"}
            </Button>

            {selectedFilter && (
              <IconButton
                onClick={() => {
                  setSelectedFilter(null);
                }}
              >
                <i className="material-icons" style={{ color: "white", fontSize: "0.75rem" }}>
                  close
                </i>
              </IconButton>
            )}
          </Box>

          <Menu classes={{ paper: classes.paper }} anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose.bind(null, null)}>
            {renderFilter(handleClose)}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
