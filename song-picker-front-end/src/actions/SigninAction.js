import AxiosWithAuth from "../utils/AxiosWithAuth";

export const SIGNIN_START = "SIGNIN_START";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAIL = "SIGNIN_FAIL";

export const signin = info => dispatch => {
  dispatch({ type: SIGNIN_START });
  // console.log(info);
  AxiosWithAuth()
    .post("/api/auth/login", info)
    .then(res => {
      dispatch({ type: SIGNIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.id);
      // console.log("sign in response", res.data);
    })
    .catch(err => {
      dispatch({ type: SIGNIN_FAIL, payload: err.res });
    });
};
