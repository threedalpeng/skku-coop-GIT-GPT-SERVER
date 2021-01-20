import React from "react";
import "./App.css";
import PageHeader from "./components/PageHeader/PageHeader";
import styled from "styled-components";
import { TextProvider } from "./TextContext";
import SelectorContainer from "./components/OptionSelector/SelectorContainer";
import TextPage from "./components/TextPage/TextPage";

const OptionPage = styled.div`
  position: static;
  width: 100vw;
  height: 8vh;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
`;

function App() {
  return (
    <div className="App">
      <PageHeader />
      <TextProvider>
        <OptionPage>
          <SelectorContainer />
        </OptionPage>
        <TextPage />
      </TextProvider>
    </div>
  );
}

export default App;
