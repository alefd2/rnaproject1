import { createContext, useContext, useMemo } from 'react';
import { useImmerReducer } from 'use-immer';

const initialState = {
  menuOpen: true,
  menuWidth: 300,
  darkMode: false,
  dispatch: () => undefined
};

const reducer = (state, { type }) => {
  switch (type) {
    case 'toggleMenu':
      state.menuOpen = !state.menuOpen;
      break;
    case 'toggleTheme':
      state.darkMode = !state.darkMode;
      break;
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);


export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const contextValue = useMemo(() => ({ ...state, dispatch }), [state, dispatch]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);