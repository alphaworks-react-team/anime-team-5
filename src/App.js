import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Anime from "./Pages/Anime";
import Home from "./Pages/Home";
import Manga from "./Pages/Manga";
import AppContainer from "./Fragments/AppContainer";

function App() {
  return (
    <AppContainer className="App">
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
