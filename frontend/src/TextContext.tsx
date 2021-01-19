import React, { useReducer, useContext, createContext, Dispatch } from "react";

type State = {
  source_text: string;
  generated_texts: string[];
  option: {
    model: string;
    rcmd_type: string;
    rcmd_num: string;
    temperature: string;
  };
};

type Action =
  | { type: "SET_SRC_TEXT"; text: string }
  | { type: "SET_GEN_TEXT"; texts: string[] }
  | { type: "CONCAT_TO_SRC_TEXT"; text: string }
  | { type: "SET_MODEL"; model: string }
  | { type: "SET_RCMD_TYPE"; rcmd_type: string }
  | { type: "SET_RCMD_NUM"; rcmd_num: string }
  | { type: "SET_TEMPERATURE"; temperature: string };

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
        generated_texts: action.texts,
      };
    case "CONCAT_TO_SRC_TEXT":
      return {
        ...state,
        source_text: state.source_text.concat(action.text),
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
          rcmd_type: action.rcmd_type,
        },
      };
    case "SET_RCMD_NUM":
      return {
        ...state,
        option: {
          ...state.option,
          rcmd_num: action.rcmd_num,
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
    default:
      throw new Error("Unhandled action");
  }
}

export function TextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    source_text: "",
    generated_texts: [
      "1. First Line",
      "2. Second Line",
      "3. Third, and Loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Line",
      "4. Fourth Line",
      "5. Fifth, and another Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong, and also\nVertically\nLong\nLine",
    ],
    option: {
      model: "cream-100x100",
      rcmd_type: "sentence",
      rcmd_num: "5",
      temperature: "2.0",
    },
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
