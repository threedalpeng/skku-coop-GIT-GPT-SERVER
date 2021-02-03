import React, { useState } from "react";
import styled from "styled-components";
import { useTextDispatch, useTextState } from "../../TextContext";
import AddButton from "../../images/AddButtonWhite.svg";

const KeywordContainer = styled.div`
  font-size: 16px;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px;

  height: 100%;
  width: 20%;

  flex: none;
  flex-grow: 0;

  button.keyword {
    width: 100%;
    height: 3em;
    margin-bottom: 0.5em;
    border-radius: 10px;
    border-color: cornflowerblue;
  }

  .add-keyword {
    width: 100%;
    height: 3em;
    border-radius: 10px;
    outline: none;
  }

  button.add-keyword {
    border: 3px dashed #ffffff;
    box-sizing: border-box;
    background-color: transparent;
  }

  input.add-keyword {
    outline: none;
  }
`;

function KeywordBlocks() {
  const state = useTextState();
  const dispatch = useTextDispatch();
  const [addMode, setAddMode] = useState(false);

  const onAddButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setAddMode(true);
  };

  const onInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // e.preventDefault();
      const keywordToAdd = e.currentTarget.value.trim();
      if (
        keywordToAdd.length >= 1 &&
        state.keywords.indexOf(keywordToAdd) === -1
      ) {
        dispatch({
          type: "SET_KEYWORDS",
          keywords: state.keywords.concat(keywordToAdd),
        });
      }
      setAddMode(false);
    }
  };

  const onKeywordClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({
      type: "SET_KEYWORDS",
      keywords: state.keywords.filter(
        (keyword) => keyword !== e.currentTarget.textContent
      ),
    });
  };

  return (
    <KeywordContainer>
      {state.keywords.map((keyword, index) => (
        <button className="keyword" key={index} onClick={onKeywordClick}>
          {keyword}
        </button>
      ))}
      {addMode ? (
        <input
          className="add-keyword"
          type="text"
          placeholder="새 키워드"
          onKeyDown={onInputEnter}
          autoFocus
        />
      ) : (
        <button className="add-keyword" onClick={onAddButtonClick}>
          <img
            src={AddButton}
            color="gray"
            height="16px"
            width="16px"
            alt="add"
          />
        </button>
      )}
    </KeywordContainer>
  );
}

export default KeywordBlocks;
