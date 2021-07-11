import { Box, Skeleton, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { connect } from "react-redux";
import Content from "../Components/Content";
import MainLayout from "../MainLayout";
import NavBar from "../NavBar";
import * as actions from "../Redux/Actions/actions";

const NewAndPopular = (props) => {
  const { loading, error, newAndPopular, fetchNewAndPopular } = props;

  useEffect(() => {
    if (newAndPopular.length > 0) {
      return;
    } else {
      fetchNewAndPopular();
    }
  }, [fetchNewAndPopular, newAndPopular.length]);

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
          {[...newAndPopular].map((data) => (
            <Content key={data.id} data={data} />
          ))}
        </MainLayout>
      )}
      {error && <p>Could not fetch new and popular.</p>}
    </NavBar>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  newAndPopular: state.newAndPopular,
});

const mapDispatchToProps = {
  fetchNewAndPopular: actions.fetchNewAndPopular,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAndPopular);
