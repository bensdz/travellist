import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Math.random(),
    };
    onAddItems(newItem);
    //initialItems.push(newItem);
    //setInitialItems(initialItems);
    setdescription("");
    setquantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your next trip?</h3>
      <select value={quantity} onChange={(e) => setquantity(+e.target.value)}>
        {/* use "+" or Number() to convert to integer */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      ></input>
      <button type="submit">add</button>
    </form>
  );
}
