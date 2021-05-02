import { Heading, Image } from "@chakra-ui/react";
import Results from "./Results.js";
import { Search } from "./Search.js";
import croppedDuck from "../Images/croppedDuck.png";
import { Link } from "react-router-dom";
import "../App.css";
import supabase from "../supabase.js";
import { useEffect, useState } from "react";

const SearchResults = ({ searchVal, setSearchVal }) => {
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

  let updated_results = [];
  if (thedata) {
    // Parsing searched text
    let quote = searchVal["search"];
    let upperCaseQuote = quote.charAt(0).toUpperCase() + quote.slice(1);
    let lowerCaseQuote = quote.charAt(0).toLowerCase() + quote.slice(1);
    const result = thedata.filter(
      (obj) =>
        obj["data"].text.includes(upperCaseQuote) ||
        obj["data"].text.includes(lowerCaseQuote)
    );

    for (let element of result) {
      updated_results.push(element["data"]);
    }
    // sort results by shortest transcripts
    updated_results.sort((a, b) => a.text.length - b.text.length);
  }

  return (
    <>
      <div className="container">
        <Link to="/">
          <img
            src={croppedDuck}
            alt="DuckDuckAbdaal"
            width="95.14px"
            height="67px"
            id="searchImage"
          />
        </Link>
        <Search setSearchVal={setSearchVal} />
      </div>
      <Heading size="md" mt={10} ml={30}>
        Times said:{" "}
        <b>
          {updated_results === [] ? "searching..." : updated_results.length}
        </b>
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
