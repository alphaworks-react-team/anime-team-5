import React from "react";
import { Link } from "react-router-dom";
import NavContainer from "./../Fragments/NavContainer";
import Search from "./Search";
import  Categories  from "./../Pages/Categories";

const Nav = (props) => {
  return (
    <NavContainer>
      <Link to="/">Home</Link>
      <Link to="/anime">Anime</Link>
      <Link to="/manga">Manga</Link>
      <Link to="/categories">Categories</Link>
      <Search searchApi={props.searchApi} setAnimeState={props.setAnimeState} />
    </NavContainer>
  );
};

export default Nav;
