import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import "../App.css";

const FeelingLucky = ({ setSearchVal }) => {
  let history = useHistory();
  let luckySearches = ["notion", "productivity", "doctor", "anki", "mac"];

  return (
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
  );
};

export default FeelingLucky;
