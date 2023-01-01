import styles from "./HookUseRef.module.css";

import { useRef, useState, useEffect } from "react";

const HookUseRef = () => {
  // Basic Usage
  const numberRef = useRef(0);
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  // use to create a reference to a JSX element (Similar to querySelector)
  const boxRef = useRef();
  const onToggleBox = () => {
    boxRef.current.classList.toggle(styles.boxActive);
  };

  return (
    <div>
      <h2>useRef</h2>
      {/* Basic Usage */}
      <>
        <p>
          Number of times component has been rendered:
          <strong>{numberRef.current}</strong>
        </p>
        <p>First Counter: {firstCounter}</p>
        <button onClick={() => setFirstCounter((counter) => counter + 1)}>
          Add do First Counter
        </button>
        <p>Second Counter: {secondCounter}</p>
        <button onClick={() => setSecondCounter((counter) => counter + 1)}>
          Add do Second Counter
        </button>
      </>
      {/* Usage for create a JSX element Ref (Similar to querySelector) */}
      <>
        <div className={styles.box} ref={boxRef}>
          Box
        </div>
        <button onClick={onToggleBox}>Toggle Box</button>
      </>
      <hr />
    </div>
  );
};

export default HookUseRef;
