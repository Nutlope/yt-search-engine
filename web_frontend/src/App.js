import "./App.css";
import HomePage from "./Components/HomePage.js";
import SearchResults from "./Components/SearchResults.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import supabase from "./supabase.js";
import { useEffect, useState } from "react";

function App() {
  const [thedata, setTheData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("temp").select("data->>text");
      if (error) {
        console.log(error);
      }
      setTheData(data);
    }
    fetchData();
  }, []);

  console.log("This is data from supabase", thedata);
  if (thedata) {
    // Tried parsing the searched text, didn't work great because not all sentences have periods
    let quote = "finals";
    const result = thedata.filter((obj) => obj.text.includes(quote));

    let newarr = [];
    for (let element of result) {
      let idx = element.text.indexOf(quote);
      let new_str = element.text.substring(idx - 450, idx + 450);
      console.log("period is at: ", new_str.indexOf("."));
      newarr.push(new_str);
    }
    console.log("result is: ", newarr);
  }

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
