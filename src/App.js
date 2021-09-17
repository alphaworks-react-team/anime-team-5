import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Anime from "./Pages/Anime";
import Home from "./Pages/Home";
import Manga from "./Pages/Manga";
import AppContainer from "./Fragments/AppContainer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
`;

const H2 = styled.h2`

`

function App() {
  const [animeState, setAnimeState] = useState([]);

  const searchApi = (name) => {
    axios
      .get(`https://kitsu.io/api/edge/anime/?filter[text]=${name}`)
      .then((res) => {
        setAnimeState(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AppContainer className="App">
      {/* {animeState.map((element, index) => (
        <h2 key={index}>{element.attributes.titles.en}</h2>
      ))} */}
      <Router>
        <Nav searchApi={searchApi} setAnimeState={setAnimeState} />
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
      {animeState.map((element, index) => (
        <Card>
          <H2 key={index}>{element.attributes.titles.en}</H2>
          <img src={element.attributes.coverImage.small} alt="Logo" />
          <h3 key={index}>
            Average Rating
            <br />
            {element.attributes.averageRating}
          </h3>
          <p>{element.attributes.synopsis}</p>
        </Card>
      ))}
    </AppContainer>
  );
}

export default App;
