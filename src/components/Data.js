import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function DataList() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  useEffect(() => {
    DataGet();
  }, []);

  const DataGet = () => {
    fetch("https://633e603c0dbc3309f3b4a4fc.mockapi.io/cstest/viktorijaLukic")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };
  const UpdateData = (id) => {
    window.location = "/update/" + id;
  };

  const DataDelete = (id) => {
    var data = {
      id: id,
    };
    fetch(
      "https://633e603c0dbc3309f3b4a4fc.mockapi.io/cstest/viktorijaLukic/" + id,
      {
        method: "DELETE",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((result) => result.json())
      .then((result) => {
        DataGet();
      });
  };
  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="md">
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                Data
              </Typography>
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="left">Year</TableCell>
                  <TableCell align="center">Effective Rent</TableCell>
                  <TableCell align="center">Starting Rent</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((data) => (
                  <TableRow key={data.ID}>
                    <TableCell align="right">{data.id}</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="left">{data.year}</TableCell>
                    <TableCell align="center">{data.effectiveRent}</TableCell>
                    <TableCell align="center">{data.startingRent}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup
                        color="primary"
                        aria-label="outlined primary button group"
                      >
                        <Button onClick={() => UpdateData(data.id)}>
                          Edit
                        </Button>
                        <Button onClick={() => DataDelete(data.id)}>Del</Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
}
