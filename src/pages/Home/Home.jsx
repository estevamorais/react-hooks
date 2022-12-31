import HookUseState from "../../components/HookUseState/HookUseState";
import HookUseReducer from "../../components/HookUseReducer/HookUseReducer";
import HookUseEffect from "../../components/HookUseEffect/HookUseEffect";

const Home = () => {
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
    </div>
  );
};

export default Home;
