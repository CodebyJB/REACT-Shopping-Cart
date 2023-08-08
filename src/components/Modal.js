import { useState } from "react";

export function Modal({ onModalClose, selectedItems, onDeleteItem }) {
  const [delivery, setDelivery] = useState(false);
  const deliveryCost = delivery ? 10 : 0;

  return (
    <div className="modal--bg">
      <div className="card modal--card">
        <div className="card-header bg--gradient d-flex justify-content-between border-0">
          <h2 class="my-3">Your Ice Cream Order</h2>
          <button
            className="btn-close d-flex align-self-center"
            onClick={onModalClose}
          ></button>
        </div>
        {selectedItems.length === 0 ? (
          <div className="card-body d-flex">
            <p>Your Basket is empty. Choose your 🍧</p>
          </div>
        ) : (
          <div>
            <div className="card-body d-flex">
              <p className="col-5 text-uppercase">Flavor</p>
              <p className="col-3 text-uppercase">Price</p>
              <p className="col-3 text-uppercase">Total</p>
            </div>
            <div className="card-body d-flex">
              <div className="col-5 d-flex">
                <label htmlFor="deliveryCheckbox">
                  <input
                    type="checkbox"
                    id="deliveryCheckbox"
                    checked={delivery}
                    onChange={(e) => setDelivery(e.target.checked)}
                  />
                  <p>Delivery</p>
                </label>
              </div>
              <p className="col-3">€ 10</p>
              <p className="col-3">€ {deliveryCost}</p>
            </div>
          </div>
        )}
        {selectedItems.map((item, index) => (
          <div key={index} className="card-body d-flex">
            <p className="col-5">
              {item.quantity}x {item.flavor}
            </p>
            <p className="col-3">€ {item.price}</p>
            <p className="col-3">€ {item.total}</p>
            <p
              className="col-1"
              role="button"
              onClick={() => onDeleteItem(item.flavor)}
            >
              🗑️
            </p>
          </div>
        ))}
        <div className="card-footer border-0 bg--gradient d-flex justify-content-around">
          <h2>total</h2>
          <h3>
            €
            {selectedItems.length > 0
              ? selectedItems.reduce((total, item) => total + item.total, 0) +
                deliveryCost
              : 0}
          </h3>
        </div>
      </div>
    </div>
  );
}
