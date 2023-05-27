import { useState } from "react";
import { createContext, useContext } from "react";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [grid, setGrid] = useState(true);
  const [title, setTitle] = useState("Keep");

  const value = {
    grid,
    setGrid,
    title,
    setTitle,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
