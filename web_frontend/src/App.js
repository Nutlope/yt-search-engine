import "./App.css";
import HomePage from "./Components/HomePage.js";
import SearchResults from "./Components/SearchResults.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/results">
              <SearchResults />
            </Route>
          </Switch>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
