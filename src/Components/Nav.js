import React from "react";
import { Link } from "react-router-dom";
import NavContainer from "./../Fragments/NavContainer";
import Search from "./Search";

const Nav = (props) => {
  return (
    <NavContainer>
      <Link to="/">Home</Link>
      <Link to="/anime">Anime</Link>
      <Link to="/manga">Manga</Link>
      <Search searchApi={props.searchApi} setAnimeState={props.setAnimeState} />
    </NavContainer>
  );
};

export default Nav;
