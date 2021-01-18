import React from "react";
import "./App.css";
import PageHeader from "./components/PageHeader/PageHeader";
import styled from "styled-components";
import { TextProvider } from "./TextContext";
import SelectorContainer from "./components/OptionSelector/SelectorContainer";
import TextForm from "./components/TextForm/TextForm";
import TextContainer from "./components/TextContainer/TextContainer";

const OptionPage = styled.div`
  position: static;
  width: 100%;
  height: 8vh;
  left: 0px;
  top: 196px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
`;

const TextPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: static;
  width: 100%;
  height: 74vh;
  left: 0px;
  top: 293px;

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 0px;

  .text-component-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 19px 10px 19px 20px;

    position: static;
    width: 1270px;
    height: 627px;
    left: 85px;
    top: 100px;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;
  }
`;

function App() {
  return (
    <div className="App">
      <PageHeader />
      <TextProvider>
        <OptionPage>
          <SelectorContainer></SelectorContainer>
        </OptionPage>
        <TextPage>
          <div className="text-component-wrapper">
            <TextForm></TextForm>
            <TextContainer></TextContainer>
          </div>
        </TextPage>
      </TextProvider>
    </div>
  );
}

export default App;
