import React from "react";
import styled from "styled-components";
// import { useTextDispatch } from "../TextContext";

type OptionType = {
  optionName: string;
  optionValue: string;
};

type SelectorType = {
  formType: string;
  name: string;
  value: string;
  defaultValue: string | number;
  options: OptionType[] | null;
  maxValue: number | null;
  minValue: number | null;
};

const Selector = styled.div`
  font-family: "Nanum Gothic";

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

  /*
  border-color: #55271d;*/
  border-color: transparent;
  border-width: 1px;
  border-radius: 10px;
  border-style: solid;

  filter: drop-shadow(0px 2px 2px rgba(58, 31, 31, 0.25));

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

    /*
    background: linear-gradient(
      180deg,
      #ffa2a2 100%,
      rgba(255, 189, 189, 0.66) 100%
    );
    */
    background: linear-gradient(180deg, #dffffd 0%, rgb(220, 238, 255) 100%);

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
    height: 1em;
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
    font-size: 18px;

    position: static;
    width: fit-content;
    left: 95px;
    top: 7px;

    border-radius: 0px 10px 10px 0px;
    border-width: 0px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
    padding: 0px 2px;

    display: flex;
  }

  .text-input {
    font-size: 18px;

    position: static;
    width: 3em;
    left: 95px;
    top: 7px;

    border-radius: 0px 10px 10px 0px;
    border-width: 0px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
    padding: 0px 2px;

    display: flex;
  }
`;

function SelectorMenu(props: SelectorType) {
  // const dispatch = useTextDispatch();

  const switchFormType = (props: SelectorType) => {
    switch (props.formType) {
      case "select":
        return (
          <select
            className="selector-menu"
            name={props.value}
            onChange={onSelectChange}
            defaultValue={props.defaultValue}
          >
            {(props.options ? props.options : []).map((option, index) => (
              <option key={index} value={option.optionValue}>
                {option.optionName}
              </option>
            ))}
          </select>
        );
      case "number":
        return (
          <input
            className="selector-menu"
            type="number"
            defaultValue={props.defaultValue}
            name={props.value}
            onChange={onInputChange}
            max={props.maxValue ? props.maxValue : 100}
            min={props.minValue ? props.minValue : 0}
            inputMode="numeric"
          />
        );
      case "text":
        return (
          <input
            className="text-input"
            type="text"
            defaultValue={props.defaultValue}
            name={props.value}
            onChange={onInputChange}
            inputMode="decimal"
          />
        );

      default:
        break;
    }
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (props.value) {
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (props.value) {
    }
  };

  return (
    <Selector>
      <label className="selector-label">
        <p className="selector-text">{props.name}</p>
      </label>
      {switchFormType(props)}
    </Selector>
  );
}

export default SelectorMenu;
