import * as actionTypes from "./actionTypes";

export const getHome = () => ({ type: actionTypes.GET_HOME });

export const getHomeSuccess = (homeData) => ({
  type: actionTypes.GET_HOME_SUCCESS,
  payload: homeData,
});

export const getHomeFailure = () => ({ type: actionTypes.GET_HOME_FAILURE });

export function fetchHome() {
  return async (dispatch) => {
    dispatch(getHome());

    try {
      const response = await fetch(
        // `https://api.themoviedb.org/3/movie/550?api_key=bb28d2c8c7d5085d12200c744e54518d`
        `https://api.themoviedb.org/3/discover/movie?api_key=bb28d2c8c7d5085d12200c744e54518d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      );
      const data = await response.json();
      dispatch(getHomeSuccess(data.results));
    } catch (error) {
      dispatch(getHomeFailure);
    }
  };
}
