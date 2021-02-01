import React, { useReducer, useContext, createContext, Dispatch } from "react";
import config from "./config/config";

type State = {
  sourceText: string;
  generatedTexts: string[];
  option: {
    model: string;
    rcmdType: string;
    rcmdNum: number;
    temperature: string;
  };
  responseTime: number;
};

type Action =
  | { type: "SET_SRC_TEXT"; text: string }
  | { type: "SET_GEN_TEXT"; texts: string[] }
  | { type: "CONCAT_TO_SRC_TEXT"; text: string }
  | { type: "SET_MODEL"; model: string }
  | { type: "SET_RCMD_TYPE"; rcmdType: string }
  | { type: "SET_RCMD_NUM"; rcmdNum: number }
  | { type: "SET_TEMPERATURE"; temperature: string }
  | { type: "SET_RES_TIME"; time: number };

type TextDispatch = Dispatch<Action>;

const TextStateContext = createContext<State | null>(null);
const TextDispatchContext = createContext<TextDispatch | null>(null);

function reducer(state: State, action: Action): State {
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
    default:
      throw new Error("Unhandled action");
  }
}

export function TextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    sourceText: "",
    generatedTexts: [],
    option: config.defaultOption,
    responseTime: 0.0,
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
