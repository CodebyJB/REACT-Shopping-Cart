import { useState } from "react";
import { Modal } from "./Modal";

export function Cart({
  totalIceCreams,
  totalAmount,
  selectedItems,
  onDeleteItem,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModalOpen() {
    setModalIsOpen(true);
  }

  function handleModalClose() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div className="d-flex">
        <div className="m-auto py-4 px-2">
          <h3>{totalIceCreams}x ice cream</h3>
          <h3>€ {totalAmount} total</h3>
        </div>
        <button
          className="p-3 cart--icon border-0 bg-transparent"
          onClick={handleModalOpen}
        >
          🧺
        </button>
      </div>
      {modalIsOpen && (
        <Modal
          onModalClose={handleModalClose}
          selectedItems={selectedItems}
          onDeleteItem={onDeleteItem}
        />
      )}
    </div>
  );
}
