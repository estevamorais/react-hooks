import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // Usage without dependencies
  // in this case the useEffect is executed whenever the component is rendered
  useEffect(() => {
    console.log("useEffect without dependencies");
  });

  // Usage with empty array
  // in this case the useEffect is executed only once
  useEffect(() => {
    console.log("useEffect with empty array");
  }, []);

  // Usage with dependencies
  // in this case the useEffect is executed whenever any of the dependencies is changed
  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);
  useEffect(() => {
    console.log("useEffect with dependencies", valueOne, valueTwo);
  }, [valueOne, valueTwo]);

  // Cleanup the effect
  const [anotherNumber, setAnotherNumber] = useState(0);
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log("Hello world!");
    //   setAnotherNumber((state) => state + 1);
    // }, 2000);
    // return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>

      {/* Usage with dependencies */}
      <button
        onClick={() => {
          setValueOne((state) => state - 1);
          setValueTwo((state) => state + 1);
        }}
      >
        Change Values
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
