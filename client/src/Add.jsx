import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  add: {
    display: "flex",
    position: "fixed",
    right: "20px",
    bottom: "20px"
  }
}));

export default function Add() {
  const classes = useStyles();
  return (
    <div>
      <Link to="/add">
        <Fab color="primary" aria-label="add" className={classes.add}>
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
}
