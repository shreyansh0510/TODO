import React from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Navbar.css";

const useStyles = makeStyles({
  navbar_card: {
    backgroundColor: "#3B42D8",
  },

  navbar_card_button: {
    backgroundColor: "white",
    boxShadow: "0px 2px 1px #E3E5F6",
    color: "#3B42D8",
  },
});

function Navbar() {
  const classes = useStyles();
  return (
    <div className="navbar">
      <Card className="navbar-card" className={classes.navbar_card}>
        <CardContent className="navbar-cardcontent">
          <Button
            className="navbar-card-button"
            className={classes.navbar_card_button}
            variant="contained"
          >
            <Typography>Logout</Typography>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Navbar;
