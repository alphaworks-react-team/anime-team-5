import React from "react";
import styled from "styled-components";

const CategoryBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  // border: 1px solid black;
  // box-sizing: border-box;
  // padding: 10px;
`;

const Title = styled.h3`
  width: 100%;
  margin: 0;
  padding-bottom: 10px;
  margin-bottom: 8px;
  border-bottom: 0.2px solid lightgrey;
  box-sizing: border-box;
`;

const TagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Tag = styled.p`
  width: 23%;
  margin: 0;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 10px;
  padding: 3px;
  border: 0.5px solid grey;
  border-radius: 3px;
  box-sizing: border-box;
  background: lightgrey;
  text-align: center;
  vertical-align: middle;
  color: grey;
  cursor: pointer;
`;

const CategoryBox = ({ title, tags = [], onClick }) => {
  return (
    <CategoryBoxContainer>
      <Title>{title}</Title>
      <TagContainer>
        {tags.map((tag, index) => (
          <Tag
            onClick={() =>
              onClick(tag.attributes.title, tag.attributes.description)
            }
            key={index}
          >
            {tag.attributes.title}
          </Tag>
        ))}
      </TagContainer>
    </CategoryBoxContainer>
  );
};

export default CategoryBox;
