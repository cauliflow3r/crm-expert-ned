import { createContext, useContext, useState } from "react";

export const uiContext = createContext();
export const useUI = () => useContext(uiContext);

export const UIContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const values = { toggleSidebar, isOpen };
  return <uiContext.Provider value={values}>{children}</uiContext.Provider>;
};
