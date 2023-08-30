import React from "react";

const Item = ({ description, quantity, packed, id, onDelete }) => {
  const handlerDelete = () => {
    onDelete(id);
  };
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {description} {quantity}
      </span>
      <button onClick={handlerDelete}>❌</button>
    </li>
  );
};

export default Item;
