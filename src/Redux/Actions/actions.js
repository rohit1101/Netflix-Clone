import * as actionTypes from "./actionTypes";

export const getHome = () => ({ type: actionTypes.GET_HOME });

export const getHomeSuccess = (homeData) => ({
  type: actionTypes.GET_HOME_SUCCESS,
  payload: homeData,
});

export const getHomeFailure = () => ({ type: actionTypes.GET_HOME_FAILURE });

export const getTvShows = () => ({ type: actionTypes.GET_TVSHOWS });

export const getTvShowsSuccess = (tvShowsData) => ({
  type: actionTypes.GET_TVSHOWS_SUCCESS,
  payload: tvShowsData,
});

export const getTvShowsFailure = () => ({
  type: actionTypes.GET_TVSHOWS_FAILURE,
});

export const getMovies = () => ({ type: actionTypes.GET_MOVIES });

export const getMoviesSuccess = (moviesData) => ({
  type: actionTypes.GET_MOVIES_SUCCESS,
  payload: moviesData,
});

export const getMoviesFailure = () => ({
  type: actionTypes.GET_MOVIES_FAILURE,
});

export const getNewAndPopular = () => ({ type: actionTypes.GET_NEWANDPOPULAR });

export const getNewAndPopularSuccess = (newData) => ({
  type: actionTypes.GET_NEWANDPOPULAR_SUCCESS,
  payload: newData,
});

export const getNewAndPopularFailure = () => ({
  type: actionTypes.GET_NEWANDPOPULAR_FAILURE,
});
