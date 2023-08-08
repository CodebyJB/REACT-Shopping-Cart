import { useState } from "react";
import FaqsAccordion from "./FaqsAccordion";
import Footer from "./Footer";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { useLocalStorage } from "./useLocalStorage";

export default function App() {
  const [iceCreamCount, setIceCreamCount] = useState({});
  const [selectedItems, setSelectedItems] = useLocalStorage([], "cart");

  const totalIceCreams = selectedItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalAmount = selectedItems.reduce(
    (total, item) => total + item.total,
    0
  );

  function decrementCount(flavor) {
    setIceCreamCount((prevCount) => ({
      ...prevCount,
      [flavor]: prevCount[flavor] > 0 ? prevCount[flavor] - 1 : 0,
    }));
  }

  function incrementCount(flavor) {
    setIceCreamCount((prevCount) => ({
      ...prevCount,
      [flavor]: (prevCount[flavor] || 0) + 1,
    }));
  }

  function addToCart(quantity, flavor, price) {
    if (!quantity) return;

    setSelectedItems((prevSelected) => [
      ...prevSelected,
      { quantity, flavor, price, total: quantity * price },
    ]);

    setIceCreamCount((prevCount) => ({
      ...prevCount,
      [flavor]: 0,
    }));
  }

  function handleDeleteItem(flavor) {
    setSelectedItems((items) => items.filter((item) => item.flavor !== flavor));
  }

  return (
    <div className="container-fluid app">
      <Header
        totalIceCreams={totalIceCreams}
        totalAmount={totalAmount}
        selectedItems={selectedItems}
        onDeleteItem={handleDeleteItem}
      />
      <Menu
        iceCreamCount={iceCreamCount}
        decrementCount={decrementCount}
        incrementCount={incrementCount}
        onAddToCart={addToCart}
      />
      <FaqsAccordion />
      <Footer />
    </div>
  );
}
