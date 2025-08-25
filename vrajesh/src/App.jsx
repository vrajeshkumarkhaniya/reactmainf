import React from 'react'
import "./App.css"

const App = () => {

  let products = [
    {
      id: 1,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with USB receiver",
      price: 19.99,
      image: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with deep bass",
      price: 45.50,
      image: "https://picsum.photos/300/200?random=2"
    },
    {
      id: 3,
      name: "Running Shoes",
      description: "Lightweight running shoes for men",
      price: 75.00,
      image: "https://picsum.photos/300/200?random=3"
    },
    {
      id: 4,
      name: "Smartwatch",
      description: "Fitness tracker with heart rate monitor",
      price: 129.99,
      image: "https://picsum.photos/300/200?random=4"
    },
    {
      id: 5,
      name: "Coffee Maker",
      description: "12-cup programmable coffee maker",
      price: 39.99,
      image: "https://picsum.photos/300/200?random=5"
    },
    {
      id: 6,
      name: "Backpack",
      description: "Water-resistant backpack for laptops",
      price: 29.95,
      image: "https://picsum.photos/300/200?random=6"
    },
    {
      id: 7,
      name: "LED Desk Lamp",
      description: "Adjustable desk lamp with USB charging port",
      price: 22.99,
      image: "https://picsum.photos/300/200?random=7"
    },
    {
      id: 8,
      name: "Gaming Keyboard",
      description: "Mechanical keyboard with RGB lighting",
      price: 59.99,
      image: "https://picsum.photos/300/200?random=8"
    },
    {
      id: 9,
      name: "Noise Cancelling Headphones",
      description: "Over-ear headphones with noise cancellation",
      price: 89.99,
      image: "https://picsum.photos/300/200?random=9"
    },
    {
      id: 10,
      name: "Yoga Mat",
      description: "Eco-friendly non-slip yoga mat",
      price: 25.00,
      image: "https://picsum.photos/300/200?random=10"
    }
  ];

  return (


    <>
      <div className="container">
        <h1>Product List</h1>
        <div className="product-grid">
          {products.map((e, i) => (
            <div className="card" key={i}>
              <img src={e.image} alt={e.name} />
              <div className="card-body">
                <h3>{e.name}</h3>
                <p>{e.description}</p>
                <div className="price">${e.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default App