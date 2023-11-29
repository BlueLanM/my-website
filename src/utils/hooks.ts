import { useReducer } from "react";

// 类似于class component的setState
export const useSet = (initState: any) => {
  const [state, setState] = useReducer((state: any, newState: any) => {
    let action = newState;
    if (typeof newState === "function") {
      action = action(state);
    }
    if (newState.action && newState.payload) {
      action = newState.payload;
      if (typeof action === "function") {
        action = action(state);
      }
    }
    const result = { ...state, ...action };

    return result;
  }, initState);
  const setStateWithActionName = (state: any, actionName: any) => {
    setState(state);
  };
  return [state, setStateWithActionName];
};
