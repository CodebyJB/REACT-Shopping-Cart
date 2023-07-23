import { iceCreamData } from "../iceCreamData";
import { IceCream } from "./IceCream";

export function Menu({
  iceCreamCount,
  decrementCount,
  incrementCount,
  onAddToCart,
}) {
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {iceCreamData.map((iceCreamObj) => (
        <IceCream
          iceCreamObj={iceCreamObj}
          key={iceCreamObj.flavor}
          iceCreamCount={iceCreamCount[iceCreamObj.flavor] || 0}
          decrementCount={() => decrementCount(iceCreamObj.flavor)}
          incrementCount={() => incrementCount(iceCreamObj.flavor)}
          onAddToCart={() =>
            onAddToCart(
              iceCreamCount[iceCreamObj.flavor] || 0,
              iceCreamObj.flavor,
              iceCreamObj.price,
              decrementCount
            )
          }
        />
      ))}
    </div>
  );
}
