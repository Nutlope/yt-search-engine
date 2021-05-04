import { Formik, Field, Form } from "formik";
import { FormControl, Input } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import "../App.css";

export const Search = ({
  width = "500px",
  height = "37px",
  setSearchVal,
  searchVal,
}) => {
  let history = useHistory();
  // Make it responsive on mobile
  const [curWidth, setCurWidth] = useState();
  useEffect(() => {
    let wd =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    console.log(wd);
    setCurWidth(wd);
  }, []);

  if (curWidth < 600) width = "300px";
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
