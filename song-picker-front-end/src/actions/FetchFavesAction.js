import AxiosWithAuth from "../utils/AxiosWithAuth";

export const FETCH_FAVES_START = "FETCH_FAVES_START";
export const FETCH_FAVES_SUCCESS = "FETCH_FAVES_SUCCESS";
export const FETCH_FAVES_FAIL = "FETCH_FAVES_FAIL";

export const fetchFaves = id => dispatch => {
  dispatch({ type: FETCH_FAVES_START });

  AxiosWithAuth()
    .get(`/api/songs/${id}/faves`)
    .then(res => {
      console.log("fetch faves res", res);
      dispatch({ type: FETCH_FAVES_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_FAVES_FAIL, payload: err }));
};
