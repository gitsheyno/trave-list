import React from "react";

const Item = ({ description, quantity, packed, id, onDelete, onPack }) => {
  const handlerDelete = () => {
    onDelete(id);
  };

  const handlerPacking = () => {
    onPack(id);
  };
  return (
    <>
      <li>
        <input type="checkbox" value={packed} onChange={handlerPacking} />
        <span style={packed ? { textDecoration: "line-through" } : {}}>
          {description} {quantity}
        </span>
        <button onClick={handlerDelete}>❌</button>
      </li>
    </>
  );
};

export default Item;
