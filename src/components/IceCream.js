export function IceCream({
  iceCreamObj,
  iceCreamCount,
  decrementCount,
  incrementCount,
  onAddToCart,
}) {
  const totalAmount = iceCreamCount * iceCreamObj.price;

  return (
    <div>
      <div className="card ice-cream--card">
        <img
          className="card-img-top p-2"
          src={iceCreamObj.img}
          alt={iceCreamObj.flavor}
        />
        <div className="card-body">
          <h1 className="color--pink">{iceCreamObj.flavor}</h1>
          <p>{iceCreamObj.description}</p>
          <div className="d-flex mb-4">
            <button className="btn" onClick={decrementCount}>
              -
            </button>
            <span className="m-3">{iceCreamCount}</span>
            <button className="btn" onClick={incrementCount}>
              +
            </button>
            <span className="m-3">
              {iceCreamObj.unit} / € {iceCreamObj.price}
            </span>
          </div>
          <button
            className="btn bg--gradient border-0"
            onClick={() =>
              onAddToCart(
                iceCreamCount,
                iceCreamObj.flavor,
                iceCreamObj.price,
                totalAmount
              )
            }
          >
            € {totalAmount} | Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
