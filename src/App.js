import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tv from "./Pages/Tv";
import Movies from "./Pages/Movies";
import NewAndPopular from "./Pages/NewAndPopular";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tv" component={Tv} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/new" component={NewAndPopular} />
      </Switch>
    </Router>
  );
}

export default App;
