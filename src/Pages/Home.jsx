import { useEffect } from "react";
import { connect } from "react-redux";
import HomePageContent from "../Components/HomePageContent";
import NavBar from "../NavBar";
import * as actions from "../Redux/Actions/actions";

const Home = (props) => {
  const { loading, error, home, fetchHome } = props;

  useEffect(() => {
    fetchHome();
  }, [fetchHome]);
  console.log(home);
  return (
    <NavBar>
      <h1>From Home</h1>
      {loading && <p>Loading home posts...</p>}
      {error && <p>Could not fetch home posts.</p>}
      {home &&
        [...home].map((data) => (
          <HomePageContent key={data.id} homeData={data} />
        ))}
    </NavBar>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  home: state.home,
  tvShows: state.tvShows,
  movies: state.movies,
  newAndPopular: state.newAndPopular,
  myList: state.myList,
});

const mapDispatchToProps = {
  fetchHome: actions.fetchHome,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
