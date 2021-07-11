import { Box, Container } from "@chakra-ui/react";

const MainLayout = ({ children }) => {
  return (
    <Container maxW="container.xl">
      <Box d="flex" flexWrap="wrap" justifyContent="space-around">
        {children}
      </Box>
    </Container>
  );
};

export default MainLayout;
