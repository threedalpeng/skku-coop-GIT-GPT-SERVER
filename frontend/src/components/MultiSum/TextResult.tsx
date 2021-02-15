import React from "react";
import { useTextState } from "./TextContext";
import styled from "styled-components";
import TextBubble from "../../images/TextBubbleWhite.svg";

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: static;
  width: 42.5%;
  height: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  /*background: #ffe7e7;*/
  background: linear-gradient(180deg, #053246 0%, #000825 100%);
  /*border: 1px solid #ffffff;*/
  box-sizing: border-box;
  border-radius: 20px;
  .scrollable {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px;
    overflow: auto;
    max-height: 90%;
    width: 100%;
  }
`;

const TextBlock = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;

  height: auto;
  width: 90%;
  min-height: 4em;

  flex: none;
  order: 0;
  flex-grow: 1;
  margin: 10px;

  background: #fdfbfb;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-width: 0px;
  outline: none;

  p {
    display: block;
    margin: 0.5em;
    width: 90%;
    max-width: 90%;
    color: #0a0909;
    word-break: break-all;
    white-space: pre-line;
  }
`;

function TextResult() {
  const state = useTextState();

  return (
    <TextGroup>
      {state.generatedText ? (
        <div className="scrollable">
          <TextBlock>
            <p>{state.generatedText}</p>
          </TextBlock>
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

export default TextResult;