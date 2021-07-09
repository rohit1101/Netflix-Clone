import * as actionTypes from "../actionTypes";

const initialState = {
  loading: false,
  home: [],
  tvShows: [],
  movies: [],
  newAndPopular: [],
  myList: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_HOME:
      return state;
    default:
      return state;
  }
}
