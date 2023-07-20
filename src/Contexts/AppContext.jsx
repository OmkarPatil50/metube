import React, { useReducer } from "react";
import { AppContext } from "..";

function AppContextProvider({ children }) {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "UPDATE_FULL_NAVBAR": {
        return { ...state, fullNavbar: !state.fullNavbar };
      }

      default:
        return state;
    }
  };
  const initialValue = {
    fullNavbar: true,
  };

  const [state, dispatch] = useReducer(reducerFunction, initialValue);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
