import React, { createContext, useReducer } from "react";
import { PageContextKeys } from "./keys";

export const PageContext = createContext();
// set initial state
const initialState = {
  userName: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case PageContextKeys.userName:
      return {
        state,
        userName: action.payload,
      };
    default:
      return state;
  }
};
const PageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PageContext.Provider value={{ state, dispatch }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
