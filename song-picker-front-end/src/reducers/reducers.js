import {
    SIGNIN_START,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL
  } from "../actions/SigninAction";
  import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
  } from "../actions/SignupAction";
  
  const initialState = {
    user: {
      username: "",
      password: "",
      first_name: "",
      last_name: ""
    },
    users: [],
    songs: [],
    isLoading: false,
    error: null,
    editing: false
  };
  
  export const reducers = (state = initialState, action) => {
    console.log("reducer action", action);
  
    switch (action.type) {
      //SIGNUP REDUCER
  
      case SIGNUP_START:
        return {
          ...state,
          isLoading: true,
          error: ""
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          isLoading: false,
          user: action.payload,
          error: ""
        };
      case SIGNUP_FAIL:
        return {
          ...state,
          isLoading: false,
          error: "Signup Failed"
        };
  
      default:
        return state;
    }
  };

  