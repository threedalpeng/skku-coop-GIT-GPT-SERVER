import React from "react";
import TextGenBlock from "./TextGenBlock";
import { useTextState } from "../../TextContext";
import styled from "styled-components";

const TextGroup = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: safe;
  align-items: center;
  padding: 10px 0px;

  overflow: auto;
  max-height: 90%;
  width: 100%;
`;

function TextGenContainer() {
  const state = useTextState();

  return (
    <TextGroup>
      {state.generatedTexts.map((text, index) => (
        <TextGenBlock key={index} text={text} />
      ))}
    </TextGroup>
  );
}

export default TextGenContainer;
