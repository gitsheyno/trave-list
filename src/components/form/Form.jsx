import React, { useState } from "react";

const Form = ({ handlerAddNewItems, handlerDeleteItem }) => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState(1);

  const resetForm = () => {
    setInput("");
    setSelect(1);
  };
  const handlerSubimet = (e) => {
    e.preventDefault();

    if (!select || !input) return;

    const newItem = {
      description: input,
      quantity: select,
      package: false,
      id: Date.now(),
    };
    resetForm();

    handlerAddNewItems(newItem);
  };

  const handlerInput = (e) => {
    setInput(e.target.value);
  };

  const shandlerSelect = (e) => {
    setSelect(+e.target.value);
  };

  return (
    <form className="add-form" onSubmit={handlerSubimet}>
      <h3>What do you need for your 😍 trip ?! </h3>
      <select value={select} onChange={shandlerSelect}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((index) => (
          <option key={index} value={index}>
            {index}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="text..."
        value={input}
        onChange={handlerInput}
      />
      <button>ADD</button>
    </form>
  );
};

export default Form;
