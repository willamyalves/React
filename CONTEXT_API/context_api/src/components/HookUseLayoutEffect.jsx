import React, { useEffect, useLayoutEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [nameW, setNameW] = useState("");

  useEffect(() => {
    setNameW("Alves");
    console.log(nameW);
  }, []);

  useLayoutEffect(() => {
    setNameW("Willamy");
    console.log(nameW);
  }, []);

  return (
    <div>
      <h2>Nome: {nameW}</h2>
    </div>
  );
};

export default HookUseLayoutEffect;
