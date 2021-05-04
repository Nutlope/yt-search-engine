import { Center } from "@chakra-ui/react";
import { Search } from "./Search.js";
import duckLogo from "../Images/croppedLogo.png";
import FeelingLucky from "./FeelingLucky.js";
import Footer from "./Footer.js";
import "../App.css";

const HomePage = ({ setSearchVal, searchVal }) => {
  return (
    <>
      <div id="wrapper">
        <Center>
          <img
            id="logoImage"
            src={duckLogo}
            alt="DuckDuckAbdaal"
            width="319px"
            height="225px"
          />
        </Center>
        <Center mt={4}>
          <Search
            width="600px"
            height="50px"
            setSearchVal={setSearchVal}
            searchVal={searchVal}
          />
        </Center>
        <FeelingLucky setSearchVal={setSearchVal} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
