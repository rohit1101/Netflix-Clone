import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard";
import Tv from "./Pages/Tv";
import Movies from "./Pages/Movies";
import NewAndPopular from "./Pages/NewAndPopular";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/tv" component={Tv} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/new" component={NewAndPopular} />
      </Switch>
    </Router>
  );
}

export default App;
