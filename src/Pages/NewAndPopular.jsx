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
      {loading && <p>Loading...</p>}
      {error && <p>Could not fetch new and popular.</p>}
      {newAndPopular &&
        [...newAndPopular].map((data) => (
          <Content key={data.id} data={data} loading={loading} />
        ))}
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
