import { Box, Image, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { backDropSize, imagePath } from "../constants";
import NavBar from "../NavBar";

const ContentDetails = () => {
  const { state } = useLocation();
  const data = state.data;

  return (
    <NavBar>
      <Box
        as="div"
        d="flex"
        direction="column"
        height="100vh"
        borderRadius="md"
        justifyContent="center"
        px="3rem"
      >
        <Image
          boxSize="xl"
          objectFit="fill"
          src={`${imagePath}/${backDropSize.widthOriginal}/${data.poster_path}`}
          alt={data.name}
        />
        <Box px="1rem">
          <Box textAlign="left">
            <Text color="gray.400" overflowWrap="normal" fontSize="md">
              {data.overview}
            </Text>
          </Box>
          <Box textAlign="left" pb="3px" d="flex">
            <Text color="gray.400" fontWeight="medium" fontSize="md">
              Release date: {data.release_date || "2021"}
            </Text>
          </Box>
          <Box>
            <Text color="gray.400" fontWeight="medium" fontSize="md">
              Language: {data.original_language}
            </Text>
          </Box>
          <Box>
            <Text color="gray.400" fontWeight="medium" fontSize="md">
              Media type: {data.media_type}
            </Text>
          </Box>
          <Box>
            <Text color="gray.400" fontWeight="medium" fontSize="md">
              Adult: {data.adult ? "Yes" : "No"}
            </Text>
          </Box>
          <Box>
            <Text color="gray.400" fontWeight="medium" fontSize="md">
              Rating: {data.vote_average}
            </Text>
          </Box>
        </Box>
      </Box>
    </NavBar>
  );
};

export default ContentDetails;
