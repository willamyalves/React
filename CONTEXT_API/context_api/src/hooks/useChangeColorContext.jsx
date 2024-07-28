import { ChangeColorContext } from "../context/ChangeColorContext";
import { useContext } from "react";

export const useChangeColorContext = () => {
  const context = useContext(ChangeColorContext);

  if (!context) {
    throw new Error(
      "useChangeColorContext deve ser usado dentro de um ChangeColorProvider."
    );
  }
  return context;
};
