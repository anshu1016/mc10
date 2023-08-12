import { createContext, useContext, useReducer } from "react";
import { initialState, InventoryReducer } from "../reducer/InventoryReducer";

export const InventoryContext = createContext();
export const InventoryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(InventoryReducer, initialState);
  return (
    <InventoryContext.Provider value={{ state, dispatch }}>
      {children}
    </InventoryContext.Provider>
  );
};
export const useInventory = () => useContext(InventoryContext);
