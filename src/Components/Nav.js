import React from "react";
import NavContainer from "./../Fragments/NavContainer";
import Search from "./Search";
import StyledLink from "../Fragments/StyledLink";

const Nav = (props) => {
  return (
    <NavContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/anime">Anime</StyledLink>
      <StyledLink to="/manga">Manga</StyledLink>
      <StyledLink to="/categories">Categories</StyledLink>
      <Search searchApi={props.searchApi} setAnimeState={props.setAnimeState} />
    </NavContainer>
  );
};

export default Nav;
