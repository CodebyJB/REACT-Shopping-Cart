import { Cart } from "./Cart";
import { Logo } from "./Logo";

export function Header({ totalIceCreams, totalAmount, selectedItems, onDeleteItem }) {
  return (
    <div className="d-flex justify-content-between bg--gradient my-3 p-3 header">
      <Logo />
      <Cart
        totalIceCreams={totalIceCreams}
        totalAmount={totalAmount}
        selectedItems={selectedItems} onDeleteItem={onDeleteItem}
      />
    </div>
  );
}
