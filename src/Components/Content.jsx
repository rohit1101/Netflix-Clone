import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { backDropSize, imagePath } from "../constants";

const Content = ({ data }) => {
  return (
    <Stack spacing="24px" mt={2}>
      <Box bg="yellow.200" my={2}>
        {data.original_title || data.original_name}
      </Box>
      <Box bg="purple.200">{data.overview}</Box>
      <Text>{data.release_date}</Text>
      <Image
        boxSize="250px"
        objectFit="fill"
        src={`${imagePath}/${backDropSize.width780}/${data.poster_path}`}
        alt={data.name}
      />
    </Stack>
  );
};

export default Content;
