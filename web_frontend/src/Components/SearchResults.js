import { Heading } from "@chakra-ui/react";
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
      // Parse out 750 chars around quote
      let idx = element["data"].text.indexOf(lowerCaseQuote);
      if (idx === -1) idx = element["data"].text.indexOf(upperCaseQuote);
      let new_str = element["data"].text.substring(idx - 350, idx + 350);

      // Making sure it stops at a space at both ends
      let spaceIdx = new_str.indexOf(" ");
      let reversedStr = new_str.split("").reverse().join("");
      let lastSpaceIdx = reversedStr.indexOf(" ");
      let final_str = new_str.substring(
        spaceIdx + 1,
        new_str.length - lastSpaceIdx - 1
      );

      element["data"].text = final_str;
      updated_results.push(element["data"]);
    }
    // sort results by shortest transcripts
    updated_results.sort((a, b) => a.text.length - b.text.length);
  }
  console.log(updated_results);
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
        <Search setSearchVal={setSearchVal} searchVal={searchVal} />
      </div>
      {updated_results.length > 0 && (
        <Heading size="md" mt={10} ml={30}>
          Videos said: <b>{updated_results.length}</b>
        </Heading>
      )}
      {updated_results.length === 0 && (
        <Heading size="md" mt={10} ml={30}>
          Searching...
        </Heading>
      )}
      {updated_results.map((result) => (
        <Results
          quote={searchVal["search"].toLowerCase()}
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
