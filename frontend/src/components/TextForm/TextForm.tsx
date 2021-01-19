import React from "react";
import { useTextDispatch, useTextState } from "../../TextContext";
import axios, { AxiosResponse } from "axios";
import config from "../../config/config";
import styled from "styled-components";

const FormGroup = styled.div`
  position: static;
  width: 526px;
  height: 100%;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 47.5px 0px;

  background: #fff5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 47px;

  form.form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px;

    position: relative;
    width: 450px;
    height: 90%;
    left: calc(50% - 450px / 2);
    top: 5%;

    text-align: left;
  }

  .form-title {
    position: static;
    width: 407px;
    height: 21px;

    font-family: "Nanum Gothic";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #000000;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: 1em;
  }

  .form-divider {
    position: static;
    width: auto;
    height: 2px;

    background: #9b9b9b;

    /* Inside Auto Layout */

    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }
`;

const InputForm = styled.textarea`
  position: static;

  flex: none;
  align-self: stretch;
  flex-grow: 1;
  margin-top: 1em;

  border-width: 0px;

  background: #fdfbfb;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);

  font-family: "Nanum Gothic";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;

  resize: none;
`;

function TextForm() {
  const state = useTextState();
  const dispatch = useTextDispatch();

  const submitSeedText = () => {
    axios
      .post(config.path.server + "/api/gen", {
        seedText: state.source_text,
        option: state.option,
      })
      .then((res: AxiosResponse<string[]>) => {
        dispatch({ type: "SET_GEN_TEXT", texts: res.data });
      });
  };

  const onUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: "SET_SRC_TEXT", text: e.target.value });
  };

  /*
  const onSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    submitSeedText();
  };
  */

  const onEnterPressed = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!e.shiftKey && e.key === "Enter") {
      e.preventDefault();
      submitSeedText();
    }
  };

  return (
    <FormGroup>
      <form className="form-wrapper">
        <label className="form-title">Seed Text</label>
        <div className="form-divider"></div>
        <InputForm
          value={state.source_text}
          placeholder="시작 문구를 입력해주세요"
          onKeyPress={onEnterPressed}
          onChange={onUpdate}
        />
        <label
          className="form-title"
          style={{ marginTop: "1px", fontSize: "10px", lineHeight: "11px" }}
        >
          [Enter]를 눌러 다음 리뷰를 생성하세요.
          <br />
          줄을 바꾸려면 [Shift] + [Enter]를 누르면 됩니다.
        </label>
      </form>
    </FormGroup>
  );
}

export default TextForm;
