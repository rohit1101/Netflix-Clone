import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tv from "./Pages/Tv";
import Movies from "./Pages/Movies";
import NewAndPopular from "./Pages/NewAndPopular";
import Home from "./Pages/Home";
import ContentDetails from "./Components/ContentDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tv" component={Tv} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/new" component={NewAndPopular} />
        <Route exact path="/details/:id" component={ContentDetails} />
      </Switch>
    </Router>
  );
}

export default App;
