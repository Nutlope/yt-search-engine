import { Box, Center, Button } from "@chakra-ui/react";
import duckLogo from "../Images/duckLogo.png";
import { Search } from "./Search.js";
import { useHistory } from "react-router-dom";
import "../App.css";
import { Formik, Field, Form } from "formik";
// import { Helmet } from "react-helmet";

const HomePage = ({ setSearchVal, searchVal }) => {
  let history = useHistory();
  let luckySearches = ["notion", "productivity", "doctor", "anki", "mac"];

  return (
    <>
      <div id="wrapper">
        {/* <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet> */}
        <Center>
          <Box boxSize="lg" mb={-10} ml={19}>
            <img src={duckLogo} alt="DuckDuckAbdaal" />
          </Box>
        </Center>
        <Center mt={-55}>
          <Search
            width="700px"
            height="50px"
            setSearchVal={setSearchVal}
            searchVal={searchVal}
          />
        </Center>
        <div id="buttonContainer">
          <Formik
            initialValues={{ clicked: "" }}
            onSubmit={() => {
              let idx = Math.floor(Math.random() * luckySearches.length);
              let val = luckySearches[idx];
              setSearchVal({ search: val });
              history.push({
                pathname: "/results",
                search: "?" + val,
              });
            }}
          >
            {() => (
              <Form>
                <Field name="search">
                  {({ field }) => (
                    <Button
                      {...field}
                      colorScheme="gray"
                      id="buttonItem"
                      variant="outline"
                      type="submit"
                    >
                      <span id="lucky">I'm Feeling Lucky</span>
                    </Button>
                  )}
                </Field>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div id="footer">
        <div class="flex-item">
          Made by{" "}
          <b>
            <a id="orange" href="https://twitter.com/Nutlope">
              Hassan
            </a>
          </b>
        </div>
        <div class="flex-item">
          GitHub
          <a href="https://github.com/Nutlope/yt-search-engine">
            <b id="orange"> Source Code</b>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
