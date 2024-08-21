import { useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function GlobalContextProvider({ children }) {
  const appMenuRef = useRef(null);

  return (
    <GlobalContext.Provider value={{ appMenuRef }}>
      {children}
    </GlobalContext.Provider>
  );
}
