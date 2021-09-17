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

const LeftArrow = styled(GoArrowSmallLeft)``;

const RightArrow = styled(GoArrowSmallRight)``;

const Carousel = ({ anime }) => {
  const [current, setCurrent] = useState(0);
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
        <SlideImage current={current} anime={anime} index={index} />
      ))}
      <RightArrow onClick={nextSlide} />
    </StyledSlider>
  );
};

export default Carousel;
