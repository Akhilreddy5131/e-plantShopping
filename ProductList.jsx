import React, { useState } from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10 },
  { id: 2, name: "Snake Plant", price: 15 },
  { id: 3, name: "Peace Lily", price: 12 },
  { id: 4, name: "Spider Plant", price: 8 },
  { id: 5, name: "Fern", price: 9 },
  { id: 6, name: "Succulent", price: 6 }
];

function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  return (
    <div>
      <h2>Plants</h2>
      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
