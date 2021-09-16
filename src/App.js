import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Anime from "./Pages/Anime";
import Home from "./Pages/Home";
import Manga from "./Pages/Manga";
import AppContainer from "./Fragments/AppContainer";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [animeState, setAnimeState] = useState([]);

  const search = (name) => {
    axios
      .get(`https://kitsu.io/api/edge/anime/?filter[text]=${name}`)
      .then((res) => {
        setAnimeState(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    search("Naruto");
  }, []);

  return (
    <AppContainer className="App">
      {/* {animeState.map((element) => (
        <h1>{element.id}</h1>
      ))} */}
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/anime">
            <Anime />
          </Route>
          <Route path="/manga">
            <Manga />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
