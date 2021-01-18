import React from "react";
import styled from "styled-components";
import config from "../../config/config";
import SelectorMenu from "./SelectorMenu";

const SelectorContainerDiv = styled.div`
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
      {config.generator_option.map((option, index) => (
        <SelectorMenu
          key={index}
          name={option.label_name}
          value={option.label_value}
          options={option.options}
        />
      ))}
    </SelectorContainerDiv>
  );
}

export default SelectorContainer;
