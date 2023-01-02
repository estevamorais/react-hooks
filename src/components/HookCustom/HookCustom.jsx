import { useState } from "react";
import { usePrevious } from "../../hooks/usePrevious";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previous = usePrevious(number);

  const handleNumber = () => {
    setNumber(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <h2>Custom Hook</h2>
      <p>Current: {number}</p>
      <p>Previous: {previous}</p>
      <button onClick={handleNumber}>Change Number</button>
      <hr />
    </div>
  );
};

export default HookCustom;
