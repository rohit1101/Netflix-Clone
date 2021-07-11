import { Box, Center, Container, Icon, Text } from "@chakra-ui/react";
import { RiNetflixFill } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="black" py="2rem">
      <Container maxW="container.xl" px="2rem" color="white">
        <Box d="flex" alignItems="center" justifyContent="space-between">
          <Box d="flex" alignItems="center">
            <Center w="20px" h="40px">
              <Icon as={RiNetflixFill} color="red" />
            </Center>
            <Text pl="1rem" fontSize="md">
              © 2021 Envelope, Inc. All rights reserved.
            </Text>
          </Box>
          <Box d="flex">
            <Center w="20px" h="40px" px="1.5rem">
              <Icon as={FaTwitter} color="hsl(203, 89%, 53%)" />
            </Center>
            <Center w="20px" h="40px" px="1.5rem">
              <Icon as={FaFacebookF} color="hsl(221, 44%, 41%)" />
            </Center>
            <Center w="20px" h="40px" px="1.5rem">
              <Icon as={FaLinkedinIn} color="hsl(210, 89%, 40%)" />
            </Center>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
