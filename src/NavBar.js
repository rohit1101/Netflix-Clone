import { Link } from "react-router-dom";
import { Link as Url } from "@chakra-ui/react";

const NavBar = ({ children }) => {
  return (
    <>
      <Url color={"green.500"}>
        <Link to="/" color={"green.500"}>
          Dashboard
        </Link>
      </Url>
      {children}
    </>
  );
};

export default NavBar;
