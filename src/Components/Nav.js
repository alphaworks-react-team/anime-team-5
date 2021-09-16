import React from "react";
import { Link } from "react-router-dom";
import NavContainer from "./../Fragments/NavContainer";

const Nav = () => {
  return (
    <NavContainer>
      <Link to="/">Home</Link>
      <Link to="/anime">Anime</Link>
      <Link to="/manga">Manga</Link>
    </NavContainer>
  );
};

export default Nav;
