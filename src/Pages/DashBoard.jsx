import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const DashBoard = () => {
  return (
    <>
      <h1>Your Dashboard</h1>
      <Box color={"green.500"}>
        <Link to="/home">Home</Link>
      </Box>
      <Box color={"green.500"}>
        <Link to="/tv">TV</Link>
      </Box>
      <Box color={"green.500"}>
        <Link to="/movies">Movies</Link>
      </Box>
      <Box color={"green.500"}>
        <Link to="/new">New & Popular</Link>
      </Box>
    </>
  );
};

export default DashBoard;
