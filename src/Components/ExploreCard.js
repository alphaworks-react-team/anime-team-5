import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const CardHeader = styled.h3`
  margin: 0;
  margin-bottom: 10px;
`;

const CardImage = styled.img`
  width: 150px;
  height: 200px;
  // object-fit: fill;
  border-radius: 5px;
`;

const CardImageRow = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CardImageContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const ViewMoreButton = styled.div`
  font-size: 12px;
  text-align: right;
  color: green;
  cursor: pointer;
`;

const MoreDetailsContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: ${(props) => (props.shown === true ? "flex" : "none")};
  justify-content: center;
  align-items: flex-end;
  background: rgba(1, 1, 1, 0.5);
`;

const MoreDetailsButton = styled.div`
  margin: 5px;
  padding: 3px;
  background: green;
  color: white;
  font-weight: bold;
  width: 70%;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;

const ExploreCard = ({ title, anime }) => {
  const [show, setShow] = useState(false);

  const moreDetailButton = () => {
    return (
      <Link to={`/anime/${anime.id}`}>
        <MoreDetailsButton className="btn btn-outline-primary mr-2 mb-2">
          More Details
        </MoreDetailsButton>
      </Link>
    );
  };

  return (
    <CardContainer>
      <CardHeader>{title}</CardHeader>
      <CardImageRow>
        {anime.map((anime, index) => (
          <CardImageContainer
            key={index}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <CardImage
              src={anime.attributes.posterImage.tiny}
              alt={anime.attributes.titles.en}
            />
            <MoreDetailsContainer shown={show}>
              <MoreDetailsButton>More Details</MoreDetailsButton>
            </MoreDetailsContainer>
          </CardImageContainer>
        ))}
      </CardImageRow>
      <ViewMoreButton>View More</ViewMoreButton>
    </CardContainer>
  );
};

export default ExploreCard;
