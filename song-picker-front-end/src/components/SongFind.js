import React, { useState, useEffect } from "react";
import {
  makeStyles,
  TextField,
  Typography,
  Button,
  Container,
  Grid
} from "@material-ui/core";
// import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { songSuggest } from "../actions/SuggestAction";
import { unlikely } from "../actions/SuggestLeastAction";
import SongFindCards from "./SongFindCards";
import SongFindLeastCard from "./SongFindLeastCard";
import SpotifyPlayer from "react-spotify-player";
import Plot from 'react-plotly.js';
import SongPlot from "./SongPlot";


const useStyles = makeStyles(theme => ({
  // icon: {
  //   marginRight: theme.spacing(2)
  // },
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
  // card: {
  //   height: "100%",
  //   display: "flex",
  //   flexDirection: "column"
  // },
  // cardMedia: {
  //   paddingTop: "56.25%" // 16:9
  // },
  // cardContent: {
  //   flexGrow: 1
  // },
  // footer: {
  //   backgroundColor: theme.palette.background.paper,
  //   padding: theme.spacing(6)
  // },
  smallText: {
    margin: "auto"
  },
  field: {
    marginTop: 20,
    width: "100%"
  }
}));

function SongFind(props) {
  console.log("songfind props", props);
  const classes = useStyles();
  // const history = useHistory();

  const [query, setQuery] = useState({
    artist: "",
    title: ""
  });
  // const [suggested, setSuggested] = useState([]);

  useEffect(() => {}, []);
  // console.log("suggest query", query);

  const handleChanges = e => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const submitQuery = e => {
    e.preventDefault();
    props.songSuggest(query);
    // console.log("submit query", query);
  };

  const unlike = e => {
    e.preventDefault();
    props.unlikely(query);
    // console.log("submit query", query);
  };

  return (
    <div>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            SONG FINDER THING
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Enter an artist and song title to find some songs that are similar
            suggestions below.
          </Typography>

          <TextField
            className={classes.field}
            variant="filled"
            label="Song Artist"
            name="artist"
            value={query.artist}
            onChange={handleChanges}
          />
          <br />
          <TextField
            className={classes.field}
            variant="filled"
            label="Song Title"
            name="title"
            value={query.title}
            onChange={handleChanges}
          />

          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={submitQuery}
                >
                  Search
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary" onClick={unlike}>
                  Search least similar
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>

          {props.least ? (
            <SongFindLeastCard song={props.least} />
          ) : !props.suggested ? (
            <Typography>
              Sorry, no results from that query. Try again!
            </Typography>
          ) : props.suggested.tracks.length > 0 ? (
            props.suggested.tracks.map(song => (
              <SongFindCards key={song.info.album} song={song} />
            ))
          ) : (
            // suggested.map(song => {
            //   console.log('map song', song)
            // })
            <Typography variant="h3" className={classes.smallText}>
              Please enter a query above
            </Typography>
          )}

          {/* {!props.suggested ? (
            <Typography>
              Sorry, no results from that query. Try again!
            </Typography>
          ) : props.suggested.length > 0 ? (
            props.suggested.map(song => (
              <SongFindCards key={song.info.album} song={song} />
            ))
          ) : (
            // suggested.map(song => {
            //   console.log('map song', song)
            // })
            <Typography variant="h3" className={classes.smallText}>
              Please enter a query above
            </Typography>
          )} */}
        </Grid>
      </Container>
      {props.suggested.tracks && <SongPlot/>}
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { songSuggest, unlikely })(SongFind);
