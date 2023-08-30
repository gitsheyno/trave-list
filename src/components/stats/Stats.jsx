import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing lists 🚀</p>
    );
  const numItems = items.length;

  const packedItems = items.reduce(
    (index, acc) => (acc.packed ? index + 1 : index),
    0
  );

  const percentage = 100 - ((numItems - packedItems) / numItems) * 100;

  return (
    <footer className="stats">
      {numItems === packedItems ? (
        <em>You got everything get ready to go ✈️ </em>
      ) : (
        <em>
          You have {numItems > 0 ? numItems : "NO"} items on your list and you
          are already packed {packedItems} ({percentage.toFixed(0)}%)
        </em>
      )}
    </footer>
  );
};

export default Stats;
