import Logo from "./components/logo/Logo";
import Form from "./components/form/Form";
import PackingList from "./components/packing-list/PackingList";
import Stats from "./components/stats/Stats";
import { useState } from "react";
import { initialItems } from "./sources/data/data";
function App() {
  const [items, setItems] = useState(initialItems);

  const handlerAddNewItems = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handlerDeleteItem = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      return [...updatedItems];
    });
  };

  console.log(items);
  return (
    <div className="app">
      <Logo />
      <Form handlerAddNewItems={handlerAddNewItems} />
      <PackingList items={items} handlerDeleteItem={handlerDeleteItem} />
      <Stats />
    </div>
  );
}

export default App;
