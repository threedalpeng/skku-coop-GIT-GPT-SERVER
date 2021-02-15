import React from "react";
import { useTextDispatch, useTextState } from "./TextContext";
import styled from "styled-components";
import axios, { AxiosResponse } from "axios";
import config from "../../config/config";

const FormGroup = styled.div`
  position: static;
  width: 45%;
  height: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
  /*background: #fff5f5;*/
  background: linear-gradient(120deg, #080335 0%, #1c515a 100%);
  border: 1px solid #1c515a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  form.form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px;
    position: relative;
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    text-align: left;
  }
  .form-title {
    position: static;
    width: 100%;
    height: 21px;
    font-family: "Nanum Gothic";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #eeeeff;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: 1em;
  }
  .form-divider {
    position: static;
    width: 100%;
    height: 2px;
    background: #949494;
    /* Inside Auto Layout */
    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }
`;

const InputForm = styled.textarea`
  position: static;
  width: 100%;
  flex: none;
  align-self: stretch;
  flex-grow: 1;
  margin-top: 1em;
  border-width: 0px;
  background: #ffffff;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
  color: #000000;
  resize: none;
  margin-bottom: 0.5em;

  :hover {
    cursor: text;
  }
`;

const FormButton = styled.button`
  background: linear-gradient(
    180deg,
    rgba(221, 255, 248, 0.85) 30%,
    #d5f2ff 98%
  );
  border-radius: 5px;
  border-width: 0px;
  padding: 5px 2em;
  font-size: 18px;

  :hover {
    cursor: pointer;
  }
`;

function TextForm() {
  const state = useTextState();
  const dispatch = useTextDispatch();

  const onUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: "SET_SRC_TEXT", text: e.target.value });
  };

  const onReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({ type: "SET_SRC_TEXT", text: "" });
    dispatch({ type: "SET_GEN_TEXT", text: "" });
  };

  const onSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    let startTime = performance.now();
    axios
      .post(config.path.server + "/api/sum/single", {
        seedText: state.sourceText,
      })
      .then((res: AxiosResponse<string>) => {
        dispatch({ type: "SET_RES_TIME", time: performance.now() - startTime });
        dispatch({ type: "SET_GEN_TEXT", text: res.data });
      });
  };

  return (
    <FormGroup>
      <form className="form-wrapper">
        <label className="form-title">리뷰 작성</label>
        <div className="form-divider"></div>
        <InputForm
          value={state.sourceText}
          placeholder="시작 문구를 입력해주세요"
          onChange={onUpdate}
        />
        {/*
        <label
          className="form-title"
          style={{ marginTop: "1px", fontSize: "10px", lineHeight: "11px" }}
        >
          [Enter]를 눌러 다음 리뷰를 생성하세요.
          <br />
          줄을 바꾸려면 [Shift] + [Enter]를 누르면 됩니다.
        </label>
        */}
        <label style={{ color: "white", marginBottom: "0.5em" }}>
          {(state.responseTime / 1000).toPrecision(3) + " s"}
        </label>
        <div style={{ display: "inline-block", width: "100%" }}>
          <FormButton onClick={onSubmit} style={{ float: "left" }}>
            생성
          </FormButton>{" "}
          <FormButton onClick={onReset} style={{ float: "right" }}>
            리셋
          </FormButton>
        </div>
      </form>
    </FormGroup>
  );
}

export default TextForm;
