import { useState } from "react";

const HookUseState = () => {
  // 1 - Basic usage
  let userName = "John";
  const [name, setName] = useState("Bill");

  const changeNames = () => {
    setName("Edward");
    userName = "Math";

    console.log(userName, name);
  };

  // 2 - Inputs usage
  const [age, setAge] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to API

    console.log(age);
  };

  return (
    <div>
      {/* 1 - Basic usage */}
      <h2>useState</h2>
      <p>var: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Change Name</button>

      <br />
      <br />
      <br />

      {/* 2 - Inputs usage */}
      <form onSubmit={handleSubmit}>
        <label>
          <span>Age: </span>
          <input
            type="number"
            value={age}
            min="0"
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </form>
      <p>Age is: {age}</p>

      <hr />
    </div>
  );
};

export default HookUseState;
