import { Box, Container } from "@chakra-ui/react";

const MainLayout = ({ children }) => {
  return (
    <Container maxW="container.xl">
      <Box d="flex" flexWrap="wrap" justifyContent="space-around" mb="2rem">
        {children}
      </Box>
    </Container>
  );
};

export default MainLayout;
