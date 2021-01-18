import React from "react";
import styled from "styled-components";
import { useTextDispatch } from "../../TextContext";

const TextButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;

  position: static;
  width: 608px;
  height: 50px;

  flex: none;
  order: 0;
  flex-grow: 1;
  margin: 10px;

  background: #fdfbfb;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border-width: 0px;
  outline: none;

  :hover {
    box-shadow: inset 0px 2px 8px 2px rgba(250, 84, 84, 0.25);
  }

  :focus {
    box-shadow: inset 0px 2px 10px 0px rgba(255, 87, 87, 0.521);
    background-color: #fdfafa;
  }
`;

type TextBlockProps = {
  text: string;
};

function TextBlock(props: TextBlockProps) {
  const dispatch = useTextDispatch();
  const onSubmit = () => {
    dispatch({ type: "CONCAT_TO_SRC_TEXT", text: props.text });
  };

  return <TextButton onSubmit={onSubmit}>{props.text}</TextButton>;
}

export default TextBlock;
