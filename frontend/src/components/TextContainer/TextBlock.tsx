import React from "react";
import styled from "styled-components";
import { useTextDispatch } from "../../TextContext";

const TextButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;

  position: static;
  width: 608px;
  height: fit-content;
  min-height: 4em;

  flex: none;
  order: 0;
  flex-grow: 1;
  margin: 10px;

  background: #fdfbfb;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
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
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget.textContent)
      dispatch({
        type: "CONCAT_TO_SRC_TEXT",
        text: e.currentTarget.textContent,
      });
  };

  return (
    <TextButton onClick={onClick}>
      <p>{props.text}</p>
    </TextButton>
  );
}

export default TextBlock;
