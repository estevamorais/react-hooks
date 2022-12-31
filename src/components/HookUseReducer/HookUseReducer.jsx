import { useReducer, useState } from "react";

const HookUseReducer = () => {
  // Simple usage without action
  const [number, numberDispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // Usage with action
  const initialList = [
    { id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing." },
    { id: 2, text: "Blanditiis ad, voluptatibus laboriosam enim quam." },
  ];

  const listReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newItem = {
          id: state.length + 1,
          text: itemText,
        };
        setItemText("");
        return [...state, newItem];
      case "DELETE":
        return state.filter((item) => item.id !== action.id);
      default:
        return state;
    }
  };

  const [itemText, setItemText] = useState(""); // input
  const [list, listDispatch] = useReducer(listReducer, initialList);

  const handleItem = (e) => {
    e.preventDefault();

    listDispatch({ type: "ADD" });
  };

  const handleDelete = (id) => {
    listDispatch({ type: "DELETE", id });
  };

  return (
    <div>
      <h2>useReducer</h2>
      {/* Simple usage without action */}
      <p>Number: {number}</p>
      <button onClick={numberDispatch}>Execute Dispatch</button>

      {/* Usage complete with action */}
      <h3>List:</h3>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <p>{item.text}</p>
            <button onClick={() => handleDelete(item.id)}>Del</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleItem}>
        <input
          type="text"
          value={itemText}
          onChange={(e) => setItemText(e.target.value)}
          placeholder="Type your text"
        />
        <button type="submit">Add text</button>
      </form>

      <hr />
    </div>
  );
};

export default HookUseReducer;
