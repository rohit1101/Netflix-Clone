import { Box, Skeleton, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { connect } from "react-redux";
import Content from "../Components/Content";
import MainLayout from "../MainLayout";
import NavBar from "../NavBar";
import * as actions from "../Redux/Thunks/Thunk";

const Home = (props) => {
  const { loading, error, home, fetchHome } = props;

  useEffect(() => {
    if (home.length > 0) {
      return;
    } else {
      fetchHome();
    }
  }, [fetchHome, home.length]);

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
          {[...home].map((data) => {
            return <Content key={data.id} data={data} />;
          })}
        </MainLayout>
      )}
      {error && <p>Could not fetch your suggestions.</p>}
    </NavBar>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  home: state.home,
});

const mapDispatchToProps = {
  fetchHome: actions.fetchHome,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
