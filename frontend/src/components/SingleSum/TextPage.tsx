import axios, { AxiosResponse } from "axios";
import React from "react";
import styled from "styled-components";
import config from "../../config/config";
import { useTextDispatch, useTextState } from "./TextContext";
import TextResult from "./TextResult";
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
      if (e.key === "Enter") {
        let startTime = performance.now();
        axios
          .post(config.path.server + "/api/sum/single", {
            seedText: state.sourceText,
          })
          .then((res: AxiosResponse<{ summarizedText: string }>) => {
            dispatch({
              type: "SET_RES_TIME",
              time: performance.now() - startTime,
            });
            dispatch({
              type: "SET_SUM_TEXT",
              text: res.data.summarizedText,
            });
          });
      }
      /*
      else if (e.shiftKey && !isNaN(+e.key)) {
        let gen_idx = +e.key - 1;
        if (0 <= gen_idx && gen_idx < state.generated_texts.length) {
          dispatch({
            type: "CONCAT_TO_SRC_TEXT",
            text: state.generated_texts[gen_idx],
          });
        }
      }
      */
    }
  };

  return (
    <TextPageDiv onKeyPress={onHotkeyEntered} tabIndex={0}>
      <div className="text-component-wrapper">
        <TextForm />
        <TextResult />
      </div>
    </TextPageDiv>
  );
}

export default TextPage;
