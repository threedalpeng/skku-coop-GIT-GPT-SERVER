import React, { useReducer, useContext, createContext, Dispatch } from "react";

type State = {
  source_text: string;
  generated_text: string[];
};

type Action =
  | { type: "SET_SRC_TEXT"; text: string }
  | { type: "SET_GEN_TEXT"; texts: string[] }
  | { type: "CONCAT_TO_SRC_TEXT"; text: string };

type TextDispatch = Dispatch<Action>;

const TextStateContext = createContext<State | null>(null);
const TextDispatchContext = createContext<TextDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_SRC_TEXT":
      return {
        ...state,
        source_text: action.text,
      };
    case "SET_GEN_TEXT":
      return {
        ...state,
        generated_text: action.texts,
      };
    case "CONCAT_TO_SRC_TEXT":
      return {
        ...state,
        source_text: state.source_text.concat(action.text),
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function TextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    source_text: "",
    generated_text: ["", "", "", "", ""],
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
