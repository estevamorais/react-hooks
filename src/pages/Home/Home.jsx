import { useContext } from "react";
import { SomeContext } from "../../components/HookUseContext/HookUseContext";

import HookUseState from "../../components/HookUseState/HookUseState";
import HookUseReducer from "../../components/HookUseReducer/HookUseReducer";
import HookUseEffect from "../../components/HookUseEffect/HookUseEffect";
import HookUseRef from "../../components/HookUseRef/HookUseRef";
import HookUseCallback from "../../components/HookUseCallback/HookUseCallback";
import HookUseMemo from "../../components/HookUseMemo/HookUseMemo";
import HookUseLayoutEffect from "../../components/HookUseLayoutEffect/HookUseLayoutEffect";
import HookUseImperativeHandle from "../../components/HookUseImperativeHandle/HookUseImperativeHandle";

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
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
    </div>
  );
};

export default Home;
