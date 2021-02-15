import React, { useReducer, useContext, createContext, Dispatch } from "react";

type TextState = {
  sourceText: string;
  summarizedText: string;
  responseTime: number;
};

type Action =
  | { type: "SET_SRC_TEXT"; text: string }
  | { type: "SET_SUM_TEXT"; text: string }
  | { type: "SET_RES_TIME"; time: number };

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
    case "SET_SUM_TEXT":
      return {
        ...state,
        summarizedText: action.text,
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
    summarizedText: "",
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
