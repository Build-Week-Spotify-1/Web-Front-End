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

// let initialState = {
//   "user_id": "",
//   "title": "",
//   "artist": "",
//   "album": ""
// }

function SongFindCards(props) {
  // console.log("song card props", props);
  // console.log("song card song", song);
  const classes = useStyles();
  const id = localStorage.getItem("user_id");
  // console.log('song find id', id);
  const [newFave, setNewFave] = useState({
    user_id: parseInt(id),
    title: `${props.song.info.title}`,
    artist: `${props.song.info.artist}`,
    album: `${props.song.info.album}`,
    album_art: `${props.song.info.image}`
  });

  const [isFaved, setIsFaved] = useState(false);

  // const toggleFaved = e => {
  //   setIsFaved(true);
  // };

  // const [newFave, setNewFave] = useState(initialState)

  // console.log('newFave', newFave);
  const submitFave = e => {
    e.preventDefault();
    props.addFaves(newFave);
    setIsFaved(true);
  };

  // name	type	required
  // user_id	string	yes
  // title	string	yes
  // artist	string	yes
  // album	string	no
  // console.log("isFaved?", isFaved);
  // console.log("image url", props.song.info.image);

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
      </Card>
    </Grid>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { addFaves })(SongFindCards);
