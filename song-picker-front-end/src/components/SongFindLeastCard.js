import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { addFaves } from "../actions/AddFavesAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SpotifyPlayer from "react-spotify-player";

const useStyles = makeStyles(theme => ({
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

  actions: {
    margin: "auto"
  }
}));

function SongFindLeastCards(props) {
  console.log("least likely props", props);
  const classes = useStyles();
  const id = localStorage.getItem("user_id");
  const [newFave] = useState({
    user_id: parseInt(id),
    title: `${props.song.title}`,
    artist: `${props.song.artist}`,
    album: `${props.song.album}`,
    album_art: `${props.song.image}`
  });

  const [isFaved, setIsFaved] = useState(false);

  const submitFave = e => {
    e.preventDefault();
    props.addFaves(newFave);
    setIsFaved(true);
  };

  //FOR SPOTIFY PLAYER
  const size = {
    width: "100%",
    height: 80
  };

  return (
    <Grid container justify="center">
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={props.song.image}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.song.artist} - {props.song.title}
          </Typography>
          <Typography>Album: {props.song.album}</Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          {isFaved === false ? (
            <Button size="small" color="primary" onClick={submitFave}>
              Add to Favorites
            </Button>
          ) : (
            <FavoriteIcon style={{ fill: "pink" }} />
          )}
        </CardActions>
        <SpotifyPlayer
          uri={`spotify:track:${props.song.id}`}
          size={size}
          view="coverart"
          theme="black"
        />
      </Card>
    </Grid>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { addFaves })(SongFindLeastCards);
