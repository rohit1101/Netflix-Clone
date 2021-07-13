import {
  homeCall,
  moviesCall,
  newAndPopularCall,
  tvCall,
} from "../../services/api";
import {
  getHome,
  getHomeFailure,
  getHomeSuccess,
  getMovies,
  getMoviesFailure,
  getMoviesSuccess,
  getNewAndPopular,
  getNewAndPopularFailure,
  getNewAndPopularSuccess,
  getTvShows,
  getTvShowsFailure,
  getTvShowsSuccess,
} from "../Actions/actions";

export function fetchHome() {
  return async (dispatch) => {
    dispatch(getHome());

    try {
      const data = await homeCall();
      dispatch(getHomeSuccess(data.results));
    } catch (error) {
      console.log(error);
      dispatch(getHomeFailure);
    }
  };
}

export function fetchTvShows() {
  return async (dispatch) => {
    dispatch(getTvShows());

    try {
      const data = await tvCall();
      dispatch(getTvShowsSuccess(data.results));
    } catch (error) {
      console.log(error);
      dispatch(getTvShowsFailure);
    }
  };
}

export function fetchMovies() {
  return async (dispatch) => {
    dispatch(getMovies());

    try {
      const data = await moviesCall();
      dispatch(getMoviesSuccess(data.results));
    } catch (error) {
      console.log(error);
      dispatch(getMoviesFailure);
    }
  };
}

export function fetchNewAndPopular() {
  return async (dispatch) => {
    dispatch(getNewAndPopular());

    try {
      const data = await newAndPopularCall();
      dispatch(getNewAndPopularSuccess(data.results));
    } catch (error) {
      console.log(error);
      dispatch(getNewAndPopularFailure);
    }
  };
}
