import React from "react";
import { FormGroup, TextArea, Button } from "@blueprintjs/core";
import { useTextDispatch, useTextState } from "../TextContext";
import axios, { AxiosResponse } from "axios";
import config from "../config/config";

function TextForm() {
  const state = useTextState();
  const dispatch = useTextDispatch();

  const onUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: "SET_SRC_TEXT", text: e.target.value });
  };

  const onSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    axios
      .post(config.path.server + "/api/gen", {
        seedText: state.source_text,
      })
      .then((res: AxiosResponse<string[]>) => {
        dispatch({ type: "SET_GEN_TEXT", texts: res.data });
      });
  };

  return (
    <div>
      <FormGroup
        label="Seed Text"
        labelFor="seed-text"
        style={{ marginBottom: "3rem", fontSize: "18px" }}
      >
        <TextArea
          id="seed-text"
          fill={true}
          growVertically={true}
          large={true}
          placeholder="시작 문장을 입력하세요."
          className="min-block"
          style={{ marginBottom: "1rem" }}
          value={state.source_text}
          onChange={onUpdate}
        />
        <Button
          icon="document"
          text="Submit"
          style={{ float: "right" }}
          onClick={onSubmit}
        />
      </FormGroup>
    </div>
  );
}

export default TextForm;
