import AxiosWithAuth from "../utils/AxiosWithAuth";

export const ADD_FAVES_START = "ADD_FAVES_START";
export const ADD_FAVES_SUCCESS = "ADD_FAVES_SUCCESS";
export const ADD_FAVES_FAIL = "ADD_FAVES_FAIL";

export const addFaves = fave => dispatch => {
  dispatch({ type: ADD_FAVES_START });
  // const fave = JSON.stringify(fave)
  // console.log("checking fave being added to faves", fave);
  AxiosWithAuth()
    .post("/api/songs/faves", fave)
    .then(res => {
      console.log("addFaves post res", res);
      dispatch({ type: ADD_FAVES_SUCCESS, payload: res.config.data });
    })
    .catch(err => {
      console.error('Error communicating with server on add fave: ', err.response);
      dispatch({ type: ADD_FAVES_FAIL });
    });
};
