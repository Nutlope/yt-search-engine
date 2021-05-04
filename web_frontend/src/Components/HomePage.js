import { Center, Button, Heading } from "@chakra-ui/react";
import duckLogo from "../Images/croppedLogo.png";
import { Search } from "./Search.js";
import { useHistory } from "react-router-dom";
import "../App.css";
import { Formik, Field, Form } from "formik";

const HomePage = ({ setSearchVal, searchVal }) => {
  let history = useHistory();
  let luckySearches = ["notion", "productivity", "doctor", "anki", "mac"];

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
