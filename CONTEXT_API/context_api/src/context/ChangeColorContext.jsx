import { createContext, useReducer } from "react";

export const ChangeColorContext = createContext(null);

export const ChangeColorProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "RED":
        return { ...state, color: "red" };
      case "BLUE":
        return { ...state, color: "blue" };
      case "ORANGE":
        return { ...state, color: "orange" };
      case "YELLOW":
        return { ...state, color: "yellow" };
      case "GREEN":
        return { ...state, color: "green" };
      case "GRAY":
        return { ...state, color: "gray" };
      default:
        return { ...state };
    }
  };
  const [state, dispatch] = useReducer(reducer, { color: "purple" });

  return (
    <ChangeColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ChangeColorContext.Provider>
  );
};
