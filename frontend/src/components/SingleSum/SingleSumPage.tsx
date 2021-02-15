import React from "react";
import styled from "styled-components";
import { TextProvider } from "./TextContext";
import SelectorContainer from "./OptionSelector/SelectorContainer";
import TextPage from "./TextPage";

const OptionPage = styled.div`
  position: static;
  width: 100vw;
  height: 8vh;

  flex: none;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
`;

function SingleSumPage() {
  return (
    <TextProvider>
      <OptionPage>
        <SelectorContainer />
      </OptionPage>
      <TextPage />
    </TextProvider>
  );
}

export default SingleSumPage;
