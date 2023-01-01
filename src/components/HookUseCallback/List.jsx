import { useState, useEffect } from "react";

const List = ({ items }) => {
  const [receivedItems, setReceivedItems] = useState([]);

  useEffect(() => {
    console.log("Get data from database...");
    setReceivedItems(items);
  }, [items]);

  return (
    <ul>
      {receivedItems &&
        receivedItems.map((item, i) => (
          <li key={i}>
            <span>{item}</span>
          </li>
        ))}
    </ul>
  );
};

export default List;
