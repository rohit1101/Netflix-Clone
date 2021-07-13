import { Box, Skeleton, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { connect } from "react-redux";
import Content from "../Components/Content";
import MainLayout from "../MainLayout";

import NavBar from "../NavBar";
import * as actions from "../Redux/Thunks/Thunk";

const Tv = (props) => {
  const { loading, error, tvShows, fetchTvShows } = props;

  useEffect(() => {
    if (tvShows.length > 0) {
      return;
    } else {
      fetchTvShows();
    }
  }, [fetchTvShows, tvShows.length]);

  return (
    <NavBar>
      {loading ? (
        <MainLayout>
          {new Array(20).fill(0).map((i, index) => (
            <Stack my={2} key={index}>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Box width="300px">
                <Skeleton height="250px" />
              </Box>
            </Stack>
          ))}
        </MainLayout>
      ) : (
        <MainLayout>
          {[...tvShows].map((data) => (
            <Content key={data.id} data={data} />
          ))}
        </MainLayout>
      )}
      {error && <p>Could not fetch TV Shows.</p>}
    </NavBar>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  tvShows: state.tvShows,
});

const mapDispatchToProps = {
  fetchTvShows: actions.fetchTvShows,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tv);
