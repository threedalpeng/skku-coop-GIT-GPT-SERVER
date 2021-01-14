import React, { useState } from "react";
import styled from "styled-components";
import { useTextDispatch } from "../TextContext";

const TBlock = styled.div`
  border-style: solid;
  border-color: black;
  border-width: 4px;
  margin: 2px;
  border-radius: 8px;
  height: 4rem;
  text-align: center;
  display: table;
  width: 100%;
  cursor: pointer;

  p {
    display: table-cell;
    vertical-align: middle;
    padding: 16px;
  }

  &:hover{
    border-color: rgb(15, 46, 41);
    background-color: #d6fcff;
  }

  &:active{
    border-color: rgb(32, 95, 85);
    background-color: #acf9ff;
  }
`;

type TextBlockProps = {
  text: string
};

function TextBlock(props: TextBlockProps) {
  const [text] = useState(props.text);

  const dispatch = useTextDispatch();
  const onClick = () => {
    dispatch({ type: "CONCAT_TO_SRC_TEXT", text: text });
  };

  return (
    <TBlock onClick={onClick}>
      <p>{text}</p>
    </TBlock>
  );
}

export default TextBlock;
