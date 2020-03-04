import AxiosWithAuth from "../utils/AxiosWithAuth";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const signup = info => {
  return dispatch => {
    dispatch({ type: SIGNUP_START });
    // console.log("signup info", info);
    AxiosWithAuth()
      .post("/api/auth/register", info)
      .then(res => {
        // console.log("signup res", res);
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      })
      .catch(err => {
        // console.log(err.res);
        window.alert("Please fill in all fields.");
      });
  };
};
