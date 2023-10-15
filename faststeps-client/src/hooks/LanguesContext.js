import React, { createContext, useContext, useState } from 'react';

const LanguesContext = createContext();

export function LanguesProvider({ children }) {
  const [languesState, setLanguesState] = useState();

  return (
    <LanguesContext.Provider value={{ languesState, setLanguesState }}>
      {children}
    </LanguesContext.Provider>
  );
}

export function useLanguesContext() {
  return useContext(LanguesContext);
}