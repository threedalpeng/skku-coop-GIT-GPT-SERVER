import React from "react";
import { useTextState } from "../../TextContext";
import styled from "styled-components";
import TextBubble from "../../images/TextBubbleWhite.svg";
import TextGenContainer from "./TextGenContainer";
import TextExampleContainer from "./TextExampleContainer";

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 42.5%;
  height: 100%;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  /*background: #ffe7e7;*/
  background: linear-gradient(180deg, #053246 0%, #000825 100%);
  /*border: 1px solid #ffffff;*/
  box-sizing: border-box;
  border-radius: 20px;

  .inner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 90%;
  }

  .container-divider-horizontal {
    justify-self: flex-end;
    width: 100%;
    height: 2px;

    background: #949494;
  }
`;

function TextOutContainer() {
  const state = useTextState();

  return (
    <TextGroup>
      {state.generatedTexts.length && state.exampleText.length ? (
        <div className="inner-container">
          <TextGenContainer />
          <div className="container-divider-horizontal" />
          <TextExampleContainer />
        </div>
      ) : (
        <div>
          <img src={TextBubble} height="64px" width="64px" alt="=" />
          <h2 style={{ color: "white" }}>리뷰를 생성해주세요!</h2>
        </div>
      )}
    </TextGroup>
  );
}

export default TextOutContainer;
