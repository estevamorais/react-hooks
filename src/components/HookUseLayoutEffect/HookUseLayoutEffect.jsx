import { useLayoutEffect, useEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Josh");

  useEffect(() => {
    console.log("2");
    setName("Bill");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("George");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Name is: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
