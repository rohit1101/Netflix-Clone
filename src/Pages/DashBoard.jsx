import { Link } from "react-router-dom";
import { Link as Url } from "@chakra-ui/react";

const DashBoard = () => {
  return (
    <>
      <h1>Your Dashboard</h1>
      <Url href="#" color={"green.500"}>
        <Link to="/home">Home</Link>
      </Url>
    </>
  );
};

export default DashBoard;
