export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Add some items</em>
      </p>
    );
  }

  function calcNbPacked(items) {
    let nbPacked = 0;
    items.map((item) => item.packed && nbPacked++);
    return nbPacked;
  }
  const nbp = calcNbPacked(items);
  const perc = Math.round((nbp * 100) / items.length);
  return (
    <footer className="stats">
      <em>
        {perc === 100
          ? "You are ready to go!"
          : `You packed ${nbp} items out of ${items.length} (${perc}% )`}
      </em>
    </footer>
  );
}
