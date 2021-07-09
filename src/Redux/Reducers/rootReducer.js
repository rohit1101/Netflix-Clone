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
        home: [...action.payload],
        loading: false,
        error: false,
      };
    case actionTypes.GET_HOME_FAILURE:
      return { home: [], loading: false, error: true };

    case actionTypes.GET_TVSHOWS:
      return { ...state, loading: true };
    case actionTypes.GET_TVSHOWS_SUCCESS:
      return {
        ...state,
        tvShows: [...action.payload],
        loading: false,
        error: false,
      };
    case actionTypes.GET_TVSHOWS_FAILURE:
      return { tvShows: [], loading: false, error: true };

    case actionTypes.GET_MOVIES:
      return { ...state, loading: true };
    case actionTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...action.payload],
        loading: false,
        error: false,
      };
    case actionTypes.GET_MOVIES_FAILURE:
      return { movies: [], loading: false, error: true };

    case actionTypes.GET_NEWANDPOPULAR:
      return { ...state, loading: true };
    case actionTypes.GET_NEWANDPOPULAR_SUCCESS:
      return {
        ...state,
        newAndPopular: [...action.payload],
        loading: false,
        error: false,
      };
    case actionTypes.GET_NEWANDPOPULAR_FAILURE:
      return { newAndPopular: [], loading: false, error: true };

    default:
      return state;
  }
}
