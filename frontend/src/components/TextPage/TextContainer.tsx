import React from "react";
import TextBlock from "./TextBlock";
import { useTextState } from "../../TextContext";
import styled from "styled-components";

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: static;
  width: 45%;
  height: fit-content;
  max-height: 100%;
  min-height: 30%;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  /*background: #ffe7e7;*/
  background: linear-gradient(180deg, #053246 0%, #000825 100%);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 13px;

  flex: none;
  order: 1;

  .scrollable {
    display: flex;
    flex-direction: column;
    justify-content: safe;
    align-items: center;
    padding: 10px 0px;

    overflow: auto;
    max-height: 90%;
    width: 100%
  }
`;

function TextContainer() {
  const state = useTextState();

  return (
    <TextGroup>
      <div className="scrollable">
        {state.generated_texts.map((text, index) => (
          <TextBlock key={index} text={text} />
        ))}
      </div>
    </TextGroup>
  );
}

export default TextContainer;
