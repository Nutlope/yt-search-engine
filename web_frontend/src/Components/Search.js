import { Formik, Field, Form } from "formik";
import { FormControl, Input } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import "../App.css";

export const Search = ({
  width = "500px",
  height = "37px",
  setSearchVal,
  searchVal,
}) => {
  let history = useHistory();
  return (
    <>
      <Formik
        initialValues={{
          search: searchVal["search"] === "" ? "" : searchVal["search"],
        }}
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
                <FormControl id="searchBar">
                  <Input
                    focusBorderColor="#de5833"
                    {...field}
                    h={height}
                    w={width}
                    type="text"
                    placeholder="Search any Ali Abdaal quote"
                  />
                  <SearchIcon mx="-35px" mt="-3px" color="grey" />
                </FormControl>
              )}
            </Field>
          </Form>
        )}
      </Formik>
    </>
  );
};
