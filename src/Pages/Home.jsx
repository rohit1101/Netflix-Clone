import { Box, Skeleton, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { connect } from "react-redux";
import Content from "../Components/Content";
import MainLayout from "../MainLayout";
import NavBar from "../NavBar";
import * as actions from "../Redux/Actions/actions";

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
        new Array(20).fill(0).map(() => (
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
      ) : (
        <MainLayout>
          {[...home].map((data) => {
            console.log(data.id);
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
