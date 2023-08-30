import Logo from "./components/logo/Logo";
import Form from "./components/form/Form";
import PackingList from "./components/packing-list/PackingList";
import Stats from "./components/stats/Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handlerAddNewItems = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handlerDeleteItem = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      return [...updatedItems];
    });
  };

  const handlerPacking = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handlerReset = () => {
    setItems([]);
  };

  console.log(items);
  return (
    <div className="app">
      <Logo />
      <Form handlerAddNewItems={handlerAddNewItems} />
      <PackingList
        items={items}
        handlerDeleteItem={handlerDeleteItem}
        onPack={handlerPacking}
        onReset={handlerReset}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
