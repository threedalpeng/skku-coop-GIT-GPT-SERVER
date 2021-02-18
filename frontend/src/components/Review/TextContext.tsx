import React, { useReducer, useContext, createContext, Dispatch } from "react";
import config from "../../config/config";

type KeywordState = "recommended" | "used" | "activated";

type KeywordType = {
  text: string;
  state: KeywordState;
};

type TextState = {
  sourceText: string;
  generatedTexts: string[];
  exampleText: string;
  option: {
    model: string;
    rcmdType: string;
    rcmdNum: number;
    temperature: string;
  };
  responseTime: number;
  keywords: KeywordType[];
};

type Action =
  | { type: "SET_SRC_TEXT"; text: string }
  | { type: "SET_GEN_TEXT"; texts: string[] }
  | { type: "CONCAT_TO_SRC_TEXT"; text: string }
  | { type: "SET_MODEL"; model: string }
  | { type: "SET_RCMD_TYPE"; rcmdType: string }
  | { type: "SET_RCMD_NUM"; rcmdNum: number }
  | { type: "SET_TEMPERATURE"; temperature: string }
  | { type: "SET_RES_TIME"; time: number }
  | { type: "SET_KEYWORDS"; keywords: KeywordType[] }
  | { type: "SET_EXAMPLE"; text: string };

type TextDispatch = Dispatch<Action>;

const TextStateContext = createContext<TextState | null>(null);
const TextDispatchContext = createContext<TextDispatch | null>(null);

function reducer(state: TextState, action: Action): TextState {
  switch (action.type) {
    case "SET_SRC_TEXT":
      return {
        ...state,
        sourceText: action.text,
      };
    case "SET_GEN_TEXT":
      return {
        ...state,
        generatedTexts: action.texts,
      };
    case "CONCAT_TO_SRC_TEXT":
      return {
        ...state,
        sourceText: state.sourceText.concat(action.text),
      };
    case "SET_MODEL":
      return {
        ...state,
        option: {
          ...state.option,
          model: action.model,
        },
        keywords: config.review.keywords[action.model],
      };
    case "SET_RCMD_TYPE":
      return {
        ...state,
        option: {
          ...state.option,
          rcmdType: action.rcmdType,
        },
      };
    case "SET_RCMD_NUM":
      return {
        ...state,
        option: {
          ...state.option,
          rcmdNum: action.rcmdNum,
        },
      };
    case "SET_TEMPERATURE":
      return {
        ...state,
        option: {
          ...state.option,
          temperature: action.temperature,
        },
      };
    case "SET_RES_TIME":
      return {
        ...state,
        responseTime: action.time,
      };
    case "SET_KEYWORDS":
      return {
        ...state,
        keywords: action.keywords,
      };
    case "SET_EXAMPLE":
      return {
        ...state,
        exampleText: action.text,
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function TextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    sourceText: "",
    generatedTexts: [],
    exampleText: "",
    option: config.review.defaultOption,
    responseTime: 0.0,
    keywords: [
      { text: "피부타입", state: "recommended" },
      { text: "세정력", state: "recommended" },
      { text: "자극도", state: "recommended" },
    ],
  });

  return (
    <TextStateContext.Provider value={state}>
      <TextDispatchContext.Provider value={dispatch}>
        {children}
      </TextDispatchContext.Provider>
    </TextStateContext.Provider>
  );
}

export function useTextState() {
  const state = useContext(TextStateContext);
  if (!state) throw new Error("Cannot find TextProvider"); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useTextDispatch() {
  const dispatch = useContext(TextDispatchContext);
  if (!dispatch) throw new Error("Cannot find TextProvider"); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
