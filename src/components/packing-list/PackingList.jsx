import React, { useState } from "react";
import Item from "../item/Item";

const PackingList = ({ items, handlerDeleteItem, onPack, onReset }) => {
  const [select, setSelect] = useState("packed");

  let sortedItems;

  const onDelete = (id) => {
    handlerDeleteItem(id);
  };
  const handlerResetButton = () => {
    onReset();
  };

  const handlerSortSelect = (e) => {
    setSelect(e.target.value);
  };

  if (select === "input") sortedItems = items;
  if (select === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (select === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          const { description, quantity, packed, id } = item;
          return (
            <Item
              key={id}
              description={description}
              quantity={quantity}
              packed={packed}
              id={id}
              onDelete={onDelete}
              onPack={onPack}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={select} onChange={handlerSortSelect}>
          <option value="input">SORT BY INPUT ORDERS</option>
          <option value="description">SORT BY INPUT DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={handlerResetButton}>Reset</button>
      </div>
    </div>
  );
};

export default PackingList;
