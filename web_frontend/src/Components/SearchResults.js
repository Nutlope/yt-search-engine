import { Heading, Image } from "@chakra-ui/react";
import Results from "./Results.js";
import Search from "./Search.js";
import croppedDuck from "../Images/croppedDuck.png";
import { Link } from "react-router-dom";
import "../App.css";

const SearchResults = () => {
  return (
    <>
      <div className="container">
        <Link to="/">
          <Image
            src={croppedDuck}
            alt="DuckDuckAbdaal"
            w="95.14px"
            h="67px"
            mr={8}
            ml={2}
          />
        </Link>
        <Search />
      </div>
      <Heading size="md" mt={10} ml={30}>
        Times said: <b>{6}</b>
      </Heading>
      <Results />
    </>
  );
};

export default SearchResults;
