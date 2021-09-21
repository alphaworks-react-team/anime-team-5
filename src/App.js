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
import Categories from "./Pages/Categories";
import Card from "./Fragments/Card";

const Img = styled.img`
  height: 200px;
  width: 200px;
  box-shadow: 0 4px 8px 0 rgba(22, 114, 51, 0.34);
  border-radius: 5px;
`;

function App() {
  const [animeState, setAnimeState] = useState([]);
  const [catState, setCatState] = useState([]);

  const searchApi = (name) => {
    axios
      .get(`https://kitsu.io/api/edge/anime/?filter[text]=${name}`)
      .then((res) => {
        setAnimeState(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const catApi = () => {
    console.log("hello");
  };

  useEffect(() => {
    let one = `https://kitsu.io/api/edge/anime?filter[categories]=action`;
    let two = `https://kitsu.io/api/edge/anime?filter[categories]=Space`;
    let three = `https://kitsu.io/api/edge/anime?filter[categories]=Ninja`;

    axios
      .get(one)
      .then((res) => console.log("one ====>", res))
      .catch((err) => console.log(err));

    axios
      .get(two)
      .then((res) => console.log("two ====>", res))
      .catch((err) => console.log(err));

    axios
      .get(three)
      .then((res) => console.log("three ====>", res))
      .catch((err) => console.log(err));

    // catApi();
  }, []);

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
          <Route path="/categories">
            <Categories catState={catState} />
          </Route>
        </Switch>
      </Router>
      {animeState.map((element, index) => (
        <Card>
          <h2 key={index}>{element.attributes.titles.en}</h2>
          <Img src={element.attributes.coverImage?.original} alt="Logo" />
          <h4 key={index}>
            Average Rating
            <br />
            {element.attributes.averageRating}
          </h4>
          <p>
            Description
            <br />
            {element.attributes.synopsis}
          </p>
        </Card>
      ))}
    </AppContainer>
  );
}

export default App;
