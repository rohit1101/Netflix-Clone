import { useEffect } from "react";
import { connect } from "react-redux";
import Content from "../Components/Content";

import NavBar from "../NavBar";
import * as actions from "../Redux/Actions/actions";

const Tv = (props) => {
  const { loading, error, tvShows, fetchTvShows } = props;

  useEffect(() => {
    if (tvShows.length > 0) {
      return;
    } else {
      fetchTvShows();
    }
    fetchTvShows();
  }, [fetchTvShows, tvShows.length]);

  return (
    <NavBar>
      <h1>From TV</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Could not fetch TV Shows.</p>}
      {tvShows &&
        [...tvShows].map((data) => (
          <Content key={data.id} data={data} loading={loading} />
        ))}
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
