import { Box, Image, Center } from "@chakra-ui/react";
import duckLogo from "../Images/duckLogo.png";
import { Search } from "./Search.js";

const HomePage = ({ setSearchVal }) => {
  return (
    <>
      <Center>
        <Box boxSize="md" mb={-10}>
          <Image src={duckLogo} alt="DuckDuckAbdaal" />
        </Box>
      </Center>
      <Center mt={-55}>
        <Search width="700px" height="50px" setSearchVal={setSearchVal} />
      </Center>
    </>
  );
};

export default HomePage;
