import React, { createContext, useContext, useState } from 'react';
import {autos} from '../../Utils/promesas'
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState({autos});

  return (
    <AppContext.Provider
      value={{
        products
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
