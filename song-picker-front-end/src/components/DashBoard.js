import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Grid, Typography, Container } from "@material-ui/core/";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import DashBoardSongCards from "./DashBoardSongCards";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import {fetchFaves} from "../actions/FetchFavesAction"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

function DashBoard(props) {
  console.log('dashboard props', props)
  const classes = useStyles();
  const userMessage = localStorage.getItem("message");
  const id = localStorage.getItem("user_id");
  const [faves, setFaves] = useState([]);
  console.log('faves', faves);
  
  useEffect(() => {
    // props.fetchFaves(id);
    // setFaves(props.faves)
    AxiosWithAuth()
      .get(`/api/songs/${id}/faves`)
      .then(res => {
        console.log("get faves res", res);
        setFaves(res.data);
      })
      .catch(err => {
        console.error(
          "Error communicating with server on GET to specific id faves: ",
          err
        );
      });
  }, []);

  // console.log("dashboard faves", faves);

  return (
    <div>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {userMessage}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Here are all your favorite songs. If you don't have any you can
              find some suggestions at our finder.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Song Finder
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* {faves.map(data => {console.log('map data', data)})} */}
            {faves.map(data => (
              <DashBoardSongCards key={data.id} data={data} />
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer> */}
      {/* End footer */}
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {fetchFaves})(DashBoard);
