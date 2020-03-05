import AxiosWithAuth from "../utils/AxiosWithAuth";

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";

export const fetchUser = id => dispatch => {
  dispatch({ type: FETCH_USER_START });
  // let user_id = localStorage.getItem("user_id");
  AxiosWithAuth()
    .get(`/api/users/${id}`)
    .then(res => {
      console.log("fetch user res", res);
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.err("Error communicating with server on GET user by id: ", err);
      dispatch({ type: FETCH_USER_FAIL, payload: err });
    });
};
