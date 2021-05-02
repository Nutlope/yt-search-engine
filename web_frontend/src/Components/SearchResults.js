import { Heading, Image } from "@chakra-ui/react";
import Results from "./Results.js";
import { Search } from "./Search.js";
import croppedDuck from "../Images/croppedDuck.png";
import { Link } from "react-router-dom";
import "../App.css";
import supabase from "../supabase.js";
import { useEffect, useState } from "react";

const SearchResults = ({ searchVal, setSearchVal }) => {
  // TODO: sort results by shortest transcripts
  const [thedata, setTheData] = useState();

  console.log("searchVal from SearchResults is: ", searchVal);

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

  let updated_results = [];
  if (thedata) {
    // Parsing searched text
    let quote = searchVal["search"];
    const result = thedata.filter((obj) => obj["data"].text.includes(quote));

    for (let element of result) {
      updated_results.push(element["data"]);
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
        <Search setSearchVal={setSearchVal} />
      </div>
      <Heading size="md" mt={10} ml={30}>
        Times said: <b>{updated_results.length}</b>
      </Heading>
      {updated_results.map((result) => (
        <Results
          video_url={result.video_url}
          title={result.name}
          text={result.text}
          key={result.id}
        />
      ))}
    </>
  );
};

export default SearchResults;
