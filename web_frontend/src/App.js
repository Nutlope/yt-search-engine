import HomePage from "./Components/HomePage.js";
import SearchResults from "./Components/SearchResults.js";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  const location = useLocation();
  const [searchVal, setSearchVal] = useState({
    search: location.search.slice(1),
  });
  return (
    <Switch>
      <Route exact path="/">
        <HomePage setSearchVal={setSearchVal} searchVal={searchVal} />
      </Route>
      <Route path="/results">
        <SearchResults searchVal={searchVal} setSearchVal={setSearchVal} />
      </Route>
    </Switch>
  );
}

export default App;
