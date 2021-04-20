import { useFormik, Formik } from "formik";
import {
  FormControl,
  Input,
  Form,
  Field,
  Center,
  Heading,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      history.push("/results");
      // TODO: Make API call to search firestore here then display results when I get them back
      alert(values["search"]);
    },
  });

  return (
    // <Formik
    //   initialValues={{ name: "Sasuke" }}
    //   onSubmit={(values) => {
    //     history.push("/results");
    //     alert(JSON.stringify(values, null, 2));
    //   }}
    // >
    //   {(props) => (
    //     <Form>
    //       <Field name="name">
    //         {({ field, form }) => (
    //           <FormControl>
    //             <Input {...field} id="name" placeholder="name" />
    //           </FormControl>
    //         )}
    //       </Field>
    //     </Form>
    //   )}
    // </Formik>

    <div className="App">
      <Center p={10} mt={350}>
        <Heading as="h1">DuckDuckAbdaal</Heading>
      </Center>
      <Center>
        {/* <Form onSubmit={formik.handleSubmit}> */}
        <Input
          height="50px"
          w="500px"
          type="text"
          placeholder="Search any Ali Abdaal quote"
          onChange={formik.handleChange}
          value={formik.values.search}
        />
        {/* </Form> */}
      </Center>
    </div>
  );
};

export default HomePage;
