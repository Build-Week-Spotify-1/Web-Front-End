import AxiosWithAuth from "../utils/AxiosWithAuth";

export const DELETE_FAVES_START = "DELETE_FAVES_START";
export const DELETE_FAVES_SUCCESS = "DELETE_FAVES_SUCCESS";
export const DELETE_FAVES_FAIL = "DELETE_FAVES_FAIL";

export const deleteFaves = song_id => dispatch => {
  const user_id = localStorage.getItem("user_id");

  dispatch({ type: DELETE_FAVES_START });
  console.log("delete fave id", song_id);
  AxiosWithAuth()
    .delete(`/api/songs/${user_id}/faves/${song_id}`)
    .then(res => {
      console.log("delete fave res", res);
    })
    .catch(err => console.error(err));
};
