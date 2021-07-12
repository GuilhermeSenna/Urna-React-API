import React from "react";

import { makeStyles } from "@material-ui/core/styles"; //material ui
import Fab from "@material-ui/core/Fab"; //material ui
import AddIcon from "@material-ui/icons/Add"; //material ui
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
