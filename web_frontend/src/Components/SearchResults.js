import { Heading, Image } from "@chakra-ui/react";
import Results from "./Results.js";
import Search from "./Search.js";
import croppedDuck from "../Images/croppedDuck.png";
import { Link } from "react-router-dom";
import "../App.css";
import supabase from "../supabase.js";
import { useEffect, useState } from "react";

const SearchResults = () => {
  // TODO: sort results by shortest transcripts
  const [thedata, setTheData] = useState();

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("temp").select();
      if (error) {
        console.log(error);
      }
      setTheData(data);
    }
    fetchData();
  }, []);

  if (thedata) {
    // Parsing searched text
    let quote = "finals"; // TODO: Get this quote from the search component
    const result = thedata.filter((obj) => obj["data"].text.includes(quote));

    let updated_results = [];
    for (let element of result) {
      updated_results.push(element["data"].text);
    }
    console.log("result is: ", updated_results);
  }

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
