import AxiosWithAuth from "../utils/AxiosWithAuth";

export const ADD_FAVES_START = "ADD_FAVES_START";
export const ADD_FAVES_SUCCESS = "ADD_FAVES_SUCCESS";
export const ADD_FAVES_FAIL = "ADD_FAVES_FAIL";

export const addFaves = fave => dispatch => {
  dispatch({ type: ADD_FAVES_START });
  console.log("checking fave being added to faves", fave);
  AxiosWithAuth()
    .post("/api/songs/faves")
    .then(res => {
      console.log("addFaves post res", res);
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: ADD_FAVES_FAIL });
    });
};
