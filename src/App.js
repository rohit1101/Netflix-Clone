import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import DashBoard from "./Components/DashBoard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
