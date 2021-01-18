import React from "react";
import styled from "styled-components";
import { useTextDispatch } from "../../TextContext";

type OptionType = {
  option_name: string;
  option_value: string;
};

type SelectorType = {
  name: string;
  value: string;
  options: OptionType[];
};

const Selector = styled.div`
  font-family: "Nanum Gothic";
  font-size: 15px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  position: static;
  width: auto;
  height: auto;
  left: 34px;
  top: 3.5px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 20px;

  border-color: #55271d;
  border-width: 1px;
  border-radius: 10px;
  border-style: solid;

  filter: drop-shadow(0px 2px 2px rgba(83, 38, 38, 0.25));

  .selector-label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1px 22px;

    position: static;
    width: auto;
    height: 100%;
    left: 0px;
    top: 7px;

    background: linear-gradient(
      180deg,
      #ffa2a2 0%,
      rgba(255, 189, 189, 0.66) 100%
    );

    border-radius: 10px 0px 0px 10px;
    border-right-color: #55271d;
    border-right-width: 1px;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
  }

  .selector-text {
    position: static;
    width: 100%;
    height: 15px;
    left: 22px;
    top: 10px;

    font-style: normal;
    line-height: 15px;
    /* identical to box height, or 83% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #55271d;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 4px 0px;
  }

  .selector-menu {
    position: static;
    width: 5rem;
    left: 95px;
    top: 7px;

    border-radius: 0px 10px 10px 0px;
    border-width: 0px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;

    display: flex;
  }
`;

function SelectorMenu(props: SelectorType) {
  const dispatch = useTextDispatch();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (props.value) {
      case "model":
        return dispatch({ type: "SET_MODEL", model: e.target.value });
      case "rcmd-type":
        return dispatch({ type: "SET_RCMD_TYPE", rcmd_type: e.target.value });
      case "rcmd-number":
        return dispatch({ type: "SET_RCMD_NUM", rcmd_num: e.target.value });
      case "temperature":
        return dispatch({ type: "SET_TEMPERATURE", temperature: e.target.value });
    }
  };

  return (
    <Selector>
      <label className="selector-label">
        <p className="selector-text">{props.name}</p>
      </label>
      <select className="selector-menu" name={props.value} onChange={onChange}>
        {props.options.map((option, index) => (
          <option key={index} value={option.option_value}>
            {option.option_name}
          </option>
        ))}
      </select>
    </Selector>
  );
}

export default SelectorMenu;
