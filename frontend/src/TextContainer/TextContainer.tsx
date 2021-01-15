import React from "react";
import TextBlock from "./TextBlock";

import { Card } from "@blueprintjs/core";
import { useTextState } from "../TextContext";

function TextContainer() {
  const state = useTextState();
  
  return (
    <Card>
      {state.generated_texts.map((text, index) => (
        <TextBlock key={index} text={text} />
      ))}
    </Card>
  );
}

export default TextContainer;
