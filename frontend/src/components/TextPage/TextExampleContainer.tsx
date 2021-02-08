import React from "react";
import { useTextState } from "../../TextContext";
import styled from "styled-components";

const TextGroup = styled.div`
  justify-self: flex-end;

  display: flex;
  flex-direction: column;
  justify-content: safe;
  align-items: center;
  padding: 10px 0px;

  overflow: auto;
  max-height: 90%;
  width: 100%;
`;

const TextExampleBlock = styled.div`
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

  height: fit-content;
  width: 100%;
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

function TextExampleContainer() {
  const state = useTextState();

  return (
    <TextGroup>
      <TextExampleBlock>
        <p>{state.exampleText}</p>
      </TextExampleBlock>
    </TextGroup>
  );
}

export default TextExampleContainer;
