import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { backDropSize, imagePath } from "../constants";
import NavBar from "../NavBar";
import { genreMovieValue, genreTvValue } from "../services/api";

const ContentDetails = () => {
  const [genreType, setGenreType] = useState({
    movie: [],
    tv: [],
  });
  const [genreState, setGenreState] = useState([]);
  const { state } = useLocation();
  const data = state.data;

  useEffect(() => {
    function getGenres() {
      genreMovieValue().then((res) =>
        setGenreType({ ...genreType, movie: [...res.genres] })
      );
      genreTvValue().then((res) =>
        setGenreType({ ...genreType, tv: [...res.genres] })
      );
    }
    getGenres();

    // let result;
    // if (data.media_type === "movie") {
    //   result = [...genreType.movie].filter(
    //     (movieGenre) => movieGenre.id === values.id
    //   );
    //   setGenreState(result);
    // }
    // if (data.media_type === "tv") {
    //   result = [...genreType.tv].filter((tvGenre) => tvGenre.id === values.id);
    //   setGenreState(result);
    // }

    return () => {
      setGenreState([]);
    };
  }, []);

  //   const getGenres = (values) => {
  //     let result;
  //     if (data.media_type === "movie") {
  //       result = [...genreType.movie].filter(
  //         (movieGenre) => movieGenre.id === values.id
  //       );
  //       setGenreState(result);
  //     }
  //     if (data.media_type === "tv") {
  //       result = [...genreType.tv].filter((tvGenre) => tvGenre.id === values.id);
  //       setGenreState(result);
  //     }
  //   };
  console.log(genreState);
  return (
    <NavBar>
      <Box
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
          <Box>
            <Text color="gray.400" fontWeight="medium" fontSize="md">
              Genre:{" "}
              {[...data.genre_ids].map((genre) => (
                <Text>genre</Text>
              ))}
            </Text>
          </Box>
        </Box>
      </Box>
    </NavBar>
  );
};

export default ContentDetails;
