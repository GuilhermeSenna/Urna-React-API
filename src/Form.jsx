import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Add() {
  return (
    <div>
      <form action="/action_page.php">
        <br />
        <div className="TextField">
          <TextField id="filled-basic" label="First name" variant="filled" />
        </div>
        <br />

        <br />
        <div className="TextField">
          <TextField id="filled-basic" label="Last name" variant="filled" />
        </div>
        <br />
        <br />
        {/* <input type="submit" value="Submit" /> */}
        <Button variant="outlined" color="secondary">
          Submit
        </Button>
        {/* você pode alternar a cor entre algumas opções,
         essa foi a que mais se destaca.
         Podemos reaproveitar. Enquanto não fazemos o crud irei deixar esse
         botão sem ação. */}
      </form>
    </div>
  );
}
