export default function Item({ obj, onDeleteItem, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={obj.packed}
        checked={obj.packed}
        onChange={() => onToggle(obj.id)}
      ></input>
      <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
        {obj.quantity}
      </span>
      <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
        {obj.description}
      </span>

      <button onClick={() => onDeleteItem(obj.id)}>❌</button>
    </li>
  );
}
