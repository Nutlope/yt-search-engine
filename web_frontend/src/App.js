import "./App.css";
import HomePage from "./Components/HomePage.js";
import SearchResults from "./Components/SearchResults.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage setSearchVal={setSearchVal} />
          </Route>
          <Route path="/results">
            <SearchResults searchVal={searchVal} setSearchVal={setSearchVal} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
