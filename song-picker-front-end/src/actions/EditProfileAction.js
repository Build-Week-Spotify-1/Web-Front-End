import AxiosWithAuth from "../utils/AxiosWithAuth";

export const EDIT_PROFILE_START = "EDIT_PROFILE_START";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAIL = "EDIT_PROFILE_FAIL";

export const editProfile = user => dispatch => {
  dispatch({ type: EDIT_PROFILE_START });
  console.log("edit profile action payload", user);
  AxiosWithAuth()
    .put(`/api/users/${user.id}`, user)
    .then(res => {
      console.log("edit profile res", res);
      dispatch({ type: EDIT_PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.error(err.response);
    });
};
