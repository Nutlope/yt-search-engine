import "./App.css";
import HomePage from "./Components/HomePage.js";
import SearchResults from "./Components/SearchResults.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
