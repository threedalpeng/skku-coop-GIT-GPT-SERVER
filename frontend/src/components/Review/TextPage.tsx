import axios, { AxiosResponse } from "axios";
import React from "react";
import styled from "styled-components";
import config from "../../config/config";
import { useTextDispatch, useTextState } from "./TextContext";
import TextOutContainer from "./TextOutContainer";
import TextForm from "./TextForm";

const TextPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: static;
  width: 100vw;
  height: 74vh;

  flex: none;
  flex-grow: 0;
  margin: 0px 0px;

  & {
    outline: none;
  }

  .text-component-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;

    position: static;
    width: 90%;
    height: 90%;
    left: 10%;
    top: 5vw;

    flex: none;
    flex-grow: 0;
    margin: 0px 10px;
  }
`;

function TextPage() {
  const state = useTextState();
  const dispatch = useTextDispatch();

  const onHotkeyEntered = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.ctrlKey) {
      if (e.key === "\n") {
        let startTime = performance.now();
        axios
          .post(config.path.server + "/api/gen", {
            seedText: state.sourceText,
            option: state.option,
            keywords: state.keywords
              .filter((keyword) => keyword.state === "activated")
              .map((keyword) => keyword.text),
          })
          .then((res: AxiosResponse<{ generatedTexts: string[] }>) => {
            dispatch({
              type: "SET_RES_TIME",
              time: performance.now() - startTime,
            });
            dispatch({ type: "SET_GEN_TEXT", texts: res.data.generatedTexts });
          });
      }
    }
  };

  return (
    <TextPageDiv onKeyPress={onHotkeyEntered} tabIndex={0}>
      <div className="text-component-wrapper">
        <TextForm />
        <TextOutContainer />
      </div>
    </TextPageDiv>
  );
}

export default TextPage;
