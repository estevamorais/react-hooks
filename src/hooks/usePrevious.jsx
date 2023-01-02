import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useDebugValue("--- CUSTOM HOOK ADD USEDEBUGVALUE---");
  useDebugValue(`Previous value is: ${ref.current}`);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
