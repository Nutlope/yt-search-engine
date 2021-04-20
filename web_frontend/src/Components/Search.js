import { Formik, Field, Form } from "formik";
import { FormControl, Input } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Search = ({ width = "400px", height = "35px" }) => {
  let history = useHistory();

  return (
    <>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values) => {
          // TODO: Make API call to search firestore here then display results when I get them back
          history.push("/results");
        }}
      >
        {(props) => (
          <Form>
            <Field name="search">
              {({ field, form }) => (
                <FormControl>
                  <Input
                    h={height}
                    w={width}
                    type="text"
                    placeholder="Search any Ali Abdaal quote"
                  />
                </FormControl>
              )}
            </Field>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Search;
