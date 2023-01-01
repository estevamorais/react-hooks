import { useCallback, useState } from "react";

import List from "./List";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItemsFromDatabase = useCallback(() => {
    return ["a", "b", "c", "d", "e", "f"];
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <List items={getItemsFromDatabase} />
      <button onClick={() => setCounter(counter + 1)}>Change Counter</button>
      <p>Counters: {counter}</p>
      <hr />
    </div>
  );
};

export default HookUseCallback;
