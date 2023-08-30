import React from "react";
import Item from "../item/Item";

const PackingList = ({ items, handlerDeleteItem, onPack }) => {
  const onDelete = (id) => {
    handlerDeleteItem(id);
  };
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
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
    </div>
  );
};

export default PackingList;
