import { useState } from "react";
import { iceCreamData } from "../iceCreamData";
import { IceCream } from "./IceCream";

export function Menu({
  iceCreamCount,
  decrementCount,
  incrementCount,
  onAddToCart,
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredIceCreamData =
    selectedCategory === "All"
      ? iceCreamData
      : iceCreamData.filter(
          (iceCreamObj) => iceCreamObj.category === selectedCategory
        );

  return (
    <div>
      <div className="text-center my-3">
        <button
          className="btn bg--gradient border-0 mx-2"
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className="btn bg--gradient border-0 mx-2"
          onClick={() => setSelectedCategory("Ice Cream")}
        >
          Ice Cream
        </button>
        <button
          className="btn bg--gradient border-0 mx-2"
          onClick={() => setSelectedCategory("Popsicle")}
        >
          Popsicle
        </button>
      </div>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {filteredIceCreamData.map((iceCreamObj) => (
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
    </div>
  );
}
