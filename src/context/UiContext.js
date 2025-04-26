import { createContext, useState } from "react";
export const UiContext = createContext();

const UiProvider = ({ children }) => {
  const [hidemenu, setHidemenu] = useState(false);
  const showMenu = () => {
    setHidemenu(false);
  };
  const hideMenu = () => {
    setHidemenu(true);
  };
  return (
    <UiContext.Provider
      value={{
        hidemenu,
        showMenu,
        hideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiProvider;
