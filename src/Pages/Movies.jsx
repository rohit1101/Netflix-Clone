import { Box, Skeleton, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { connect } from "react-redux";
import Content from "../Components/Content";
import NavBar from "../NavBar";
import * as actions from "../Redux/Actions/actions";

const Movies = (props) => {
  const { loading, error, movies, fetchMovies } = props;

  useEffect(() => {
    if (movies.length > 0) {
      return;
    } else {
      fetchMovies();
    }
  }, [fetchMovies, movies.length]);

  return (
    <NavBar>
      <h1>From TV</h1>
      {loading
        ? new Array(20).fill(0).map((loader) => (
            <>
              <Stack my={2}>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Box width="300px">
                  <Skeleton height="250px" />
                </Box>
              </Stack>
            </>
          ))
        : [...movies].map((data) => (
            <Content key={data.id} data={data} loading={loading} />
          ))}
      {error && <p>Could not fetch Movies.</p>}
    </NavBar>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  movies: state.movies,
});

const mapDispatchToProps = {
  fetchMovies: actions.fetchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
