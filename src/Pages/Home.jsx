import { useEffect } from "react";
import { connect } from "react-redux";
import Content from "../Components/Content";
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
      <h1>From Home</h1>
      {loading && <p>Loading home...</p>}
      {error && <p>Could not fetch your suggestions.</p>}
      {home &&
        [...home].map((data) => (
          <Content key={data.id} data={data} loading={loading} />
        ))}
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
