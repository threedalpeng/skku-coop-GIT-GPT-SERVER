import React from "react";
import { useTextState } from "./TextContext";
import styled from "styled-components";
import ReloadButton from "../../images/ReloadButton.svg";
import axios, { AxiosResponse } from "axios";
import config from "../../config/config";
import { useTextDispatch } from "./TextContext";

const TextGroup = styled.div`
  height: 90%;
  width: 90%;
`;

const TextExampleBlock = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  position: relative;

  height: fit-content;
  width: 100%;
  min-height: 80%;
  overflow: auto;

  flex: none;
  order: 0;
  flex-grow: 1;

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
    text-align: start;
  }

  .floating-button {
    display: block;
    position: absolute;
    bottom: 1em;
    right: 2em;
    width: 16px;
    height: 16px;
    padding: 0px 0px;

    :hover {
      cursor: pointer;
    }
  }
`;

function TextExampleContainer() {
  const state = useTextState();
  const dispatch = useTextDispatch();

  const onReloadClick = () => {
    axios
      .post(config.path.server + "/api/example", {
        model: state.option.model,
      })
      .then((res: AxiosResponse<{ exampleText: string }>) => {
        dispatch({ type: "SET_EXAMPLE", text: res.data.exampleText });
      });
  };

  return (
    <TextGroup>
      <p
        style={{
          marginTop: "4px",
          marginBottom: "4px",
          width: "100%",
          color: "white",
        }}
      >
        리뷰 예시
      </p>
      <TextExampleBlock>
        <p>{state.exampleText}</p>
        <div className="floating-button" onClick={onReloadClick}>
          <img
            src={ReloadButton}
            style={{ top: "0px" }}
            height="16px"
            width="16px"
            alt="quit"
          />
        </div>
      </TextExampleBlock>
    </TextGroup>
  );
}

export default TextExampleContainer;
