import { useContext } from "react";
import { SomeContext } from "../../components/HookUseContext/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      About
      <>
        <h2>Context</h2>
        <p>Context Value: {contextValue}</p>
        <hr />
      </>
    </div>
  );
};

export default About;
