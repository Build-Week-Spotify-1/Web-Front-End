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

function SongFindCards(props) {
  const classes = useStyles();
  const id = localStorage.getItem("user_id");
  const [newFave] = useState({
    user_id: parseInt(id),
    title: `${props.song.info.title}`,
    artist: `${props.song.info.artist}`,
    album: `${props.song.info.album}`,
    album_art: `${props.song.info.image}`
  });

  const [isFaved, setIsFaved] = useState(false);

  const submitFave = e => {
    e.preventDefault();
    props.addFaves(newFave);
    setIsFaved(true);
  };

  const size = {
    width: "100%",
    height: 80
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={props.song.info.image}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.song.info.artist} - {props.song.info.title}
          </Typography>
          <Typography>Album: {props.song.info.album}</Typography>
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
          uri={`spotify:track:${props.song.info.id}`}
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

export default connect(mapStateToProps, { addFaves })(SongFindCards);
