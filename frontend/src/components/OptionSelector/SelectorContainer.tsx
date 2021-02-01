import React from "react";
import styled from "styled-components";
import config from "../../config/config";
import SelectorMenu from "./SelectorMenu";

const SelectorContainerDiv = styled.div`
  font-size: 18px;

  display: inline-flex;
  float: right;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 34px;

  position: relative;
  height: 60px;
  right: 20px;
  top: 20%;
`;

function SelectorContainer() {
  return (
    <SelectorContainerDiv>
      {config.generatorOption.map((option, index) => (
        <SelectorMenu
          key={index}
          name={option.labelName}
          value={option.labelValue}
          defaultValue={option.defaultValue}
          formType={option.formType}
          options={option.options ? option.options : null}
          maxValue={option.maxValue ? option.maxValue : null}
          minValue={option.minValue ? option.minValue : null}
        />
      ))}
    </SelectorContainerDiv>
  );
}

export default SelectorContainer;
