import { Heading, Image } from "@chakra-ui/react";
import ListView from "./ListView.js";
import Search from "./Search.js";
import croppedDuck from "../Images/croppedDuck.png";
import { Link } from "react-router-dom";

const SearchResults = () => {
  return (
    <div className="Search Results">
      <Link to="/">
        <Image
          src={croppedDuck}
          alt="DuckDuckAbdaal"
          w="142px"
          h="100px"
          mb={10}
          ml={3}
        />
      </Link>

      <Search />
      <Heading size="md" mt={10}>
        Times said: <b>{6}</b>
      </Heading>
      <ListView />
    </div>
  );
};

export default SearchResults;
