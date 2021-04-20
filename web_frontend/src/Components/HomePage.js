import { Formik, Field, Form } from "formik";
import { FormControl, Box, Image, Input, Center } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import duckLogo from "./duckLogo.png";

const HomePage = () => {
  let history = useHistory();

  return (
    <>
      <Center>
        <Box boxSize="md" mb={-10}>
          <Image src={duckLogo} alt="DuckDuckAbdaal" />
        </Box>
      </Center>
      <Center mt={-55}>
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
                      height="50px"
                      w="700px"
                      type="text"
                      placeholder="Search any Ali Abdaal quote"
                    />
                  </FormControl>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </Center>
    </>
  );
};

export default HomePage;
