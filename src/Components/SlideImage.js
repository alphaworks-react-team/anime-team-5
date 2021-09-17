import React, { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

const SlideTitle = styled.h3`

  position: absolute;
  visibility: ${(props) => (props.show === true ? "visible" : "hidden")}
    display: flex;
    margin: 0;
    color: white;
    background: rgba(1, 1, 1, 0.5);
`;

const SlideImage = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div key={props.index}>
      {props.index === props.current && (
        <SlideTitle shown={show}>{props.anime.attributes.titles.en}</SlideTitle>
      )}
      {props.index === props.current && (
        <Image
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          src={props.anime.attributes.posterImage.small}
          alt=""
        />
      )}
    </div>
  );
};

export default SlideImage;
