import { Link } from "react-router-dom";
import NavBar from "../NavBar";

const DashBoard = () => {
  return (
    <NavBar>
      <h1>Your Dashboard</h1>
      <Link to="/home">Home</Link>
    </NavBar>
  );
};

export default DashBoard;
