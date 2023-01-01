import { useContext } from "react";
import { SomeContext } from "../../components/HookUseContext/HookUseContext";

import HookUseState from "../../components/HookUseState/HookUseState";
import HookUseReducer from "../../components/HookUseReducer/HookUseReducer";
import HookUseEffect from "../../components/HookUseEffect/HookUseEffect";
import HookUseRef from "../../components/HookUseRef/HookUseRef";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <>
        <h2>Context</h2>
        <p>Context Value: {contextValue}</p>
        <hr />
      </>
      <HookUseRef />
    </div>
  );
};

export default Home;
