import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { backDropSize, imagePath } from "../constants";
import { Link as ReactLink } from "react-router-dom";

const Content = ({ data }) => {
  return (
    <Flex
      direction="column"
      maxWidth="250px"
      height="350"
      bg="gray.900"
      my="1rem"
      borderRadius="md"
    >
      <Image
        boxSize="250px"
        objectFit="fill"
        src={`${imagePath}/${backDropSize.width300}/${data.poster_path}`}
        alt={data.name}
      />
      <Box mt={2} maxWidth="300px" overflow="clip" textAlign="left" px="10px">
        <Text color="gray.400" overflowWrap="normal" fontSize="sm">
          {data.overview}
        </Text>
      </Box>
      <Box
        // alignSelf="center"
        maxWidth="300px"
        textAlign="left"
        px="10px"
        pb="3px"
        d="flex"
        justifyContent="space-between"
      >
        <Text color="gray.400" fontWeight="medium" fontSize="md">
          {new Date(data.release_date).getFullYear() || "2021"}
        </Text>
        <Link
          as={ReactLink}
          to={{
            pathname: `/details/${data.id}`,
            state: { data: data },
          }}
          color="gray.400"
          fontWeight="medium"
          fontSize="md"
        >
          Know more
        </Link>
      </Box>
    </Flex>
  );
};

export default Content;
