import React from "react";
import { Link } from "react-router-dom";
import NavContainer from "./../Fragments/NavContainer";
import Search  from "./Search";

const Nav = () => {
  return (
    <NavContainer>
      <Link to="/">Home</Link>
      <Link to="/anime">Anime</Link>
      <Link to="/manga">Manga</Link>
      <Search/>
    </NavContainer>
  );
};

export default Nav;
