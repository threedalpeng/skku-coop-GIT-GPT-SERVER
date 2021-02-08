import React, { useState } from "react";
import styled from "styled-components";
import { useTextDispatch, useTextState } from "../../TextContext";
import AddButton from "../../images/AddButtonWhite.svg";
import CloseButton from "../../images/CloseButton.svg";

const KeywordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px;

  height: 100%;
  width: 20%;

  flex: none;
  flex-grow: 0;

  .keyword {
    font-size: 16px;
    width: calc(100% - 4px);
    height: calc(3em - 4px);
    margin-bottom: 0.5em;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    border: 2px solid;

    &.recommended {
      border-color: cornflowerblue;
      background-color: #dae7ff;
    }

    &.used {
      border-color: red;
      background-color: #ffdada;
    }

    &.activated {
      border-color: #acff7b;
      background-color: #dfffe3;
    }

    p {
      margin: 0px;
    }
  }

  .img-button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  .add-keyword {
    font-size: 16px;
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
    border: none;
    width: calc(100% - 4px);
    padding: 0px 2px;
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

  const onCloseButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: "SET_KEYWORDS",
      keywords: state.keywords.filter(
        (keyword) =>
          keyword.text !==
          (e.currentTarget.parentNode
            ? e.currentTarget.parentNode.textContent
            : "")
      ),
    });
  };

  const onInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // e.preventDefault();
      const keywordToAdd = e.currentTarget.value.trim();
      if (
        keywordToAdd.length >= 1 &&
        !state.keywords.find((keyword) => keyword.text === keywordToAdd)
      ) {
        dispatch({
          type: "SET_KEYWORDS",
          keywords: state.keywords.concat({
            text: keywordToAdd,
            state: "recommended",
          }),
        });
      }
      setAddMode(false);
    }
  };

  const onInputFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    const keywordToAdd = e.currentTarget.value.trim();
    if (
      keywordToAdd.length >= 1 &&
      !state.keywords.find((keyword) => keyword.text === keywordToAdd)
    ) {
      dispatch({
        type: "SET_KEYWORDS",
        keywords: state.keywords.concat({
          text: keywordToAdd,
          state: "recommended",
        }),
      });
    }
    setAddMode(false);
  };

  const onKeywordClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (e.currentTarget.textContent) {
      const index = state.keywords.findIndex(
        (keyword) => keyword.text === e.currentTarget.textContent
      );
      const newKeywords = state.keywords.slice();
      if (newKeywords[index].state !== "activated")
        newKeywords[index].state = "activated";
      else {
        if (state.sourceText.includes(e.currentTarget.textContent))
          newKeywords[index].state = "used";
        else newKeywords[index].state = "recommended";
      }
      dispatch({
        type: "SET_KEYWORDS",
        keywords: newKeywords,
      });
    }
  };

  return (
    <KeywordContainer>
      <p
        style={{
          color: "white",
          marginTop: "0px",
          width: "100%",
          textAlign: "center",
        }}
      >
        키워드
      </p>
      {state.keywords.map((keyword, index) => (
        <div
          className={"keyword " + keyword.state}
          key={index}
          onClick={onKeywordClick}
        >
          <p>{keyword.text}</p>
          <button
            className="img-button"
            onClick={onCloseButtonClick}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 99,
            }}
          >
            <img src={CloseButton} height="16px" width="16px" alt="quit" />
          </button>
        </div>
      ))}
      {addMode ? (
        <input
          className="add-keyword"
          type="text"
          placeholder="새 키워드"
          onKeyDown={onInputEnter}
          onBlur={onInputFocusOut}
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
