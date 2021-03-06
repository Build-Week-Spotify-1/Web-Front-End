import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Grid, Typography, Container } from "@material-ui/core/";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import DashBoardSongCards from "./DashBoardSongCards";
import { fetchUser } from "../actions/FetchUserAction";
import { fetchFaves } from "../actions/FetchFavesAction";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

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
  },
  linkbut: {
    textDecoration: "none"
  },
  loader: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 100
  }
}));

function DashBoard(props) {
  // console.log("dashboard props", props);
  const classes = useStyles();
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    props.fetchUser(user_id);
    props.fetchFaves(user_id);
  }, []);

  return (
    <div>
      <CssBaseline />

      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Welcome, {props.user.username}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Here are all your favorite songs. If you don't have any you can find
            some suggestions at our song finder.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Link to="/search" className={classes.linkbut}>
                  <Button variant="contained" color="primary">
                    Song Finder
                  </Button>
                </Link>
              </Grid>
              {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {props.isLoading ? (
            <div className={classes.loader}>
              <Loader
                type="Audio"
                color="#1DB954"
                height={100}
                width={100}
                //  timeout={3000} //3 secs
              />
              <br />
              <Typography>Loading songs...</Typography>
            </div>
          ) : (
            <></>
          )}
          {/* {props.faves.map(data => {console.log('map data', data.id)})} */}
          {props.faves.map(data => (
            <DashBoardSongCards key={data.id} data={data} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchUser, fetchFaves })(DashBoard);
