import { useEffect } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 400px;
  border-radius: 5px;
  height: 25px;
`;

const Button = styled.button`
  border: none;
  outline: 0;

  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 60px;
  font-size: 15px;

  border-radius: 5px;
  // height: 25px;
`;

const Search = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const searchText = document.querySelector("#animeSearchInput").value;
    props.searchApi(searchText);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input id="animeSearchInput" />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default Search;
