import React from "react";
import styled from "styled-components";

const CharacterTabContainer = styled.div`
  width: 100%;
  padding: 10px;
  // display: flex;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 10px;
`;

const CharacterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const CharacterCard = styled.div`
  width: 15%;
  margin-bottom: 10px;
`;

const CharacterImage = styled.img`
  display: flex;
  width: 100%;
  height: 200px;
  border-radius: 5px;
`;

const CharacterName = styled.h3`
  margin: 0;
`;

const Character = ({ characters }) => {
  return (
    <CharacterTabContainer>
      <Title>Characters</Title>
      <CharacterContainer>
        {characters.map((character, index) => (
          <CharacterCard key={index}>
            <CharacterImage
              src={character?.attributes?.image?.original}
              alt={character?.attributes?.names?.en}
            />
            <CharacterName>{character.attributes.names.en}</CharacterName>
          </CharacterCard>
        ))}
      </CharacterContainer>
    </CharacterTabContainer>
  );
};

export default Character;
