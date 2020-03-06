import axios from "axios";

export const SUGGEST_LEAST_FAIL = "SUGGEST_LEAST_FAIL";
export const SUGGEST_LEAST_START = "SUGGEST_LEAST_START";
export const SUGGEST_LEAST_SUCCESS = "SUGGEST_LEAST_SUCCESS";

export const unlikely = query => dispatch => {
  dispatch({ type: SUGGEST_LEAST_START });
  console.log("unlike query", query);
  let artist = query.artist.split(" ").join("+");
  let title = query.title.split(" ").join("+");

  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://songster.herokuapp.com/least?title=${title}&artist=${artist}`
    )
    .then(res => {
      console.log("LEAST LIKELY res", res.data);
      dispatch({ type: SUGGEST_LEAST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(
        "Error communicating with DS server on GET suggestions: ",
        err
      );
      dispatch({ type: SUGGEST_LEAST_FAIL, payload: err });
    });
};
