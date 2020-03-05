import React, { useState, useEffect } from "react";
import { makeStyles, TextField, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { songSuggest } from "../actions/SuggestAction";
import SongFindCards from "./SongFindCards";

const useStyles = makeStyles(theme => ({
  root: {
    
  }
}));

function SongFind(props) {
  // console.log("songfind props", props);
  // const classes = useStyles();
  // const history = useHistory();

  const [query, setQuery] = useState({
    artist: "",
    title: ""
  });
  const [suggested, setSuggested] = useState([]);

  useEffect(() => {
    setSuggested(props.suggested);
  }, [props.suggested]);
  // console.log("suggest query", query);

  const handleChanges = e => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const submitQuery = e => {
    e.preventDefault();
    props.songSuggest(query);
    // console.log("submit query", query);
  };

  return (
    <div>
      <Typography>SONG FINDER THING</Typography>
      <form onSubmit={submitQuery}>
        <TextField
          variant="filled"
          label="Song Artist"
          name="artist"
          value={query.artist}
          onChange={handleChanges}
        />
        <TextField
          variant="filled"
          label="Song Title"
          name="title"
          value={query.title}
          onChange={handleChanges}
        />
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </form>
      <div>
        {suggested.length > 0 ? (
          suggested.map(song => (
            <SongFindCards key={song.info.title} song={song} />
          ))
        ) : (
          <p>Enter a suggestions above</p>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { songSuggest })(SongFind);
