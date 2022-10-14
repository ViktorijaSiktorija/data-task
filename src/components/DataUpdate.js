import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function DataUpdate() {
  const classes = useStyles();

  const { id } = useParams();
  useEffect(() => {
    fetch(
      "https://633e603c0dbc3309f3b4a4fc.mockapi.io/cstest/viktorijaLukic/" + id
    )
      .then((res) => res.json())
      .then((result) => {
        setYear(result.year);
        setEffectiveRent(result.effectiveRent);
        setStartingRent(result.startingRent);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      id: id,
      year: year,
      effectiveRent: effectiveRent,
      startingRent: startingRent,
    };
    fetch(
      "https://633e603c0dbc3309f3b4a4fc.mockapi.io/cstest/viktorijaLukic/",
      {
        method: "PUT",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        //alert(result["message"]);
        window.location.href = "/";
      });
  };

  const [year, setYear] = useState("");
  const [effectiveRent, setEffectiveRent] = useState("");
  const [startingRent, setStartingRent] = useState("");

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="year"
                name="year"
                variant="outlined"
                required
                fullWidth
                id="year"
                label="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="effectiveRent"
                label="Effective Rent"
                value={effectiveRent}
                onChange={(e) => setEffectiveRent(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="startingRent"
                label="Starting Rent"
                value={startingRent}
                onChange={(e) => setStartingRent(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}
