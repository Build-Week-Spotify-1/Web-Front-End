import AxiosWithAuth from "../utils/AxiosWithAuth";

export const DELETE_FAVES_START = "DELETE_FAVES_START";
export const DELETE_FAVES_SUCCESS = "DELETE_FAVES_SUCCESS";
export const DELETE_FAVES_FAIL = "DELETE_FAVES_FAIL";

export const deleteFaves = song_id => dispatch => {
  const user_id = localStorage.getItem("user_id");

  dispatch({ type: DELETE_FAVES_START });
  // console.log("delete fave id", song_id);
  AxiosWithAuth()
    .delete(`/api/songs/${user_id}/faves/${song_id}`)
    .then(res => {
      console.log("delete fave res", res);
      dispatch({ type: DELETE_FAVES_SUCCESS, payload: song_id });

    })
    .catch(err => {console.error("Error talking to server on DELETE req... ",err)
      dispatch({ type: DELETE_FAVES_FAIL, payload: err });
    });
};
