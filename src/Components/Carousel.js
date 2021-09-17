import React, { useState } from "react";
import styled from "styled-components";
import { GoArrowSmallLeft, GoArrowSmallRight } from "react-icons/go";
import SlideImage from "./SlideImage";

const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const SlideTitle = styled.h3`
  position: absolute;
  display: ${(props) => (props.shown === true ? "flex" : "none")};
  margin: 0;
  color: white;
  background: rgba(1, 1, 1, 0.5);
`;

const LeftArrow = styled(GoArrowSmallLeft)``;

const RightArrow = styled(GoArrowSmallRight)``;

const Carousel = ({ anime }) => {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);
  const length = anime.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledSlider>
      <LeftArrow onClick={prevSlide} />
      {anime.map((anime, index) => (
        <div key={index}>
          {index === current && (
            <SlideTitle shown={show}>{anime.attributes.titles.en}</SlideTitle>
          )}
          {index === current && (
            <Image
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              src={anime.attributes.posterImage.small}
              alt=""
            />
          )}
        </div>
      ))}
      <RightArrow onClick={nextSlide} />
    </StyledSlider>
  );
};

export default Carousel;
