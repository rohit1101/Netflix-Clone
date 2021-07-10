import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { backDropSize, imagePath } from "../constants";

const HomePageContent = ({ homeData, loading }) => {
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <Stack spacing="24px" mt={2}>
          <Box bg="yellow.200" my={2}>
            {homeData.original_title || homeData.original_name}
          </Box>
          <Box bg="purple.200">{homeData.overview}</Box>
          <Text>{homeData.release_date}</Text>
          <Image
            boxSize="250px"
            objectFit="fill"
            src={`${imagePath}/${backDropSize.width780}/${homeData.poster_path}`}
            alt={homeData.name}
          />
        </Stack>
      )}
    </>
  );
};

export default HomePageContent;
