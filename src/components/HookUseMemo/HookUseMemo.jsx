import { useMemo, useEffect, useState } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  // const premiumNumbers = ["0", "100", "200"];
  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("Premium Numbers Changed");
  }, [premiumNumbers]);

  return (
    <div>
      <h2>useMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {number && (
        <p>Contains number: {premiumNumbers.includes(number) ? "Yes" : "No"}</p>
      )}
      <hr />
    </div>
  );
};

export default HookUseMemo;
