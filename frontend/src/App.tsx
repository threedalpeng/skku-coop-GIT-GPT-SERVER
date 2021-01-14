import React from "react";
import "./App.css";
import PageHeader from "./PageHeader/PageHeader";
import TextForm from "./TextForm/TextForm";
import styled from "styled-components";
import TextContainer from "./TextContainer/TextContainer";
import { TextProvider } from "./TextContext";

const Block = styled.div`
  background: white;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 10vh;
  width: 60vw;

  .min-block {
    min-height: 16rem;
    min-width: 40vw;
  }
`;

function App() {
  return (
    <div className="App">
      <PageHeader />
      <TextProvider>
        <Block>
          <TextForm />
          <TextContainer />
        </Block>
      </TextProvider>
    </div>
  );
}

export default App;
