import axios from "axios";

export const SUGGEST_START = "SUGGEST_START";
export const SUGGEST_SUCCESS = "SUGGEST_SUCCESS";
export const SUGGEST_FAIL = "SUGGEST_FAIL";

export const songSuggest = info => dispatch => {
  dispatch({ type: SUGGEST_START });
  // console.log("sending this to suggestion", info);
  // console.log("suggest artist", info.artist);
  // console.log("suggest title", info.title);
  let artist = info.artist.split(" ").join("+");
  let title = info.title.split(" ").join("+");
  // console.log("split artist", artist);
  // console.log("split title", title);
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://spotify-suggestor.herokuapp.com/suggestions?title=${title}&artist=${artist}`
    )
    .then(res => {
      console.log("suggest res", res.data.tracks);
      dispatch({ type: SUGGEST_SUCCESS, payload: res.data.tracks });
    })
    .catch(err => {
      console.error(
        "Error communicating with DS server on GET suggestions: ",
        err
      );
      dispatch({ type: SUGGEST_FAIL, payload: err });
    });
};

// const user_id=localStorage.getItem("user_id")
//       AxiosWithAuth().post('/api/songs/faves')
