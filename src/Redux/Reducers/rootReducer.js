import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
  home: [],
  tvShows: [],
  movies: [],
  newAndPopular: [],
  myList: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_HOME:
      return { ...state, loading: true };
    case actionTypes.GET_HOME_SUCCESS:
      return {
        ...state,
        home: [action.payload, ...state.home],
        loading: false,
        error: false,
      };
    case actionTypes.GET_HOME_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
