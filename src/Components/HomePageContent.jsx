import { Box, VStack } from "@chakra-ui/react";

const HomePageContent = ({ homeData }) => {
  return (
    <VStack spacing="24px" mt={2}>
      <Box bg="yellow.200" my={2}>
        {homeData.original_title}
      </Box>
      <Box bg="purple.200">{homeData.overview}</Box>
    </VStack>
  );
};

export default HomePageContent;
