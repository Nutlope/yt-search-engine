import { Formik, Field, Form } from "formik";
import { FormControl, Input } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const Search = ({ width = "550px", height = "37px", setSearchVal }) => {
  let history = useHistory();
  return (
    <>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values) => {
          setSearchVal(values);
          history.push({
            pathname: "/results",
            search: "?" + values["search"],
          });
        }}
      >
        {() => (
          <Form>
            <Field name="search">
              {({ field }) => (
                <FormControl>
                  <Input
                    {...field}
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
