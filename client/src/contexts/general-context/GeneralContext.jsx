import React, { useContext, useReducer } from "react";

import { generalReducer, INITIAL_STATE } from "./GeneralReducer";

const GeneralContext = React.createContext();

export const GeneralProvider = ({ children }) => {
  const [state, dispatch] = useReducer(generalReducer, INITIAL_STATE);

  return (
    <GeneralContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  return useContext(GeneralContext);
};
