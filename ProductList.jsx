import React, { useState } from "react";

const categories = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Peace Lily", price: 20, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Spider Plant", price: 12, image: "https://via.placeholder.com/100" },
    { id: 4, name: "ZZ Plant", price: 18, image: "https://via.placeholder.com/100" },
    { id: 5, name: "Pothos", price: 10, image: "https://via.placeholder.com/100" },
    { id: 6, name: "Rubber Plant", price: 22, image: "https://via.placeholder.com/100" }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 8, image: "https://via.placeholder.com/100" },
    { id: 8, name: "Tulip", price: 9, image: "https://via.placeholder.com/100" },
    { id: 9, name: "Sunflower", price: 7, image: "https://via.placeholder.com/100" },
    { id: 10, name: "Lavender", price: 11, image: "https://via.placeholder.com/100" },
    { id: 11, name: "Marigold", price: 6, image: "https://via.placeholder.com/100" },
    { id: 12, name: "Jasmine", price: 10, image: "https://via.placeholder.com/100" }
  ],
  Succulents: [
    { id: 13, name: "Aloe Vera", price: 14, image: "https://via.placeholder.com/100" },
    { id: 14, name: "Echeveria", price: 16, image: "https://via.placeholder.com/100" },
    { id: 15, name: "Haworthia", price: 13, image: "https://via.placeholder.com/100" },
    { id: 16, name: "Sedum", price: 12, image: "https://via.placeholder.com/100" },
    { id: 17, name: "Crassula", price: 15, image: "https://via.placeholder.com/100" },
    { id: 18, name: "Kalanchoe", price: 17, image: "https://via.placeholder.com/100" }
  ]
};

function ProductList() {
  const [cart, setCart] = useState([]);
  const [addedItems, setAddedItems] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <h1>Paradise Nursery Plants</h1>

      {Object.keys(categories).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          {categories[category].map((plant) => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>

              <button
                onClick={() => addToCart(plant)}
                disabled={addedItems.includes(plant.id)}
              >
                {addedItems.includes(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}

      <h3>Cart Count: {cart.length}</h3>
    </div>
  );
}

export default ProductList;
