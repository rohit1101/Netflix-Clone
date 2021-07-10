import { Box, Skeleton, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { connect } from "react-redux";
import Content from "../Components/Content";
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
      <h1>From New and Popular</h1>

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
        : [...newAndPopular].map((data) => (
            <Content key={data.id} data={data} loading={loading} />
          ))}
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
