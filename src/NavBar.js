import { Link as ReactLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const NavBar = ({ children }) => {
  return (
    <>
      <Link as={ReactLink} to="/" color={"green.500"}>
        Dashboard
      </Link>

      {children}
    </>
  );
};

export default NavBar;
