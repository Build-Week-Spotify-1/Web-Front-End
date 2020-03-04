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
import {
  SUGGEST_FAIL,
  SUGGEST_START,
  SUGGEST_SUCCESS
} from "../actions/SuggestAction";

import {
  FETCH_FAVES_START,
  FETCH_FAVES_SUCCESS,
  FETCH_FAVES_FAIL
} from "../actions/FetchFavesAction";

const initialState = {
  user: {
    username: "",
    password: "",
    first_name: "",
    last_name: ""
  },
  users: [],
  faves: [],
  suggested: [],
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

    //SONG SUGGESTIONS
    case SUGGEST_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case SUGGEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        suggested: action.payload,
        error: ""
      };
    case SUGGEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: "Suggestions failed"
      };

    //FETCH FAVES
    case FETCH_FAVES_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_FAVES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        faves: action.payload,
        error: ""
      };
    case FETCH_FAVES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
