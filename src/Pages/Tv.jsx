import { useEffect } from "react";
import { connect } from "react-redux";
import HomePageContent from "../Components/HomePageContent";
import NavBar from "../NavBar";
import * as actions from "../Redux/Actions/actions";

const Tv = (props) => {
  const { loading, error, tvShows, fetchTvShows } = props;

  useEffect(() => {
    fetchTvShows();
  }, [fetchTvShows]);

  return (
    <NavBar>
      <h1>From TV</h1>
      {loading && <p>Loading tvShows posts...</p>}
      {error && <p>Could not fetch tvShows posts.</p>}
      {tvShows &&
        [...tvShows].map((data) => (
          <HomePageContent key={data.id} homeData={data} loading={loading} />
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
