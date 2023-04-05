import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "StrawBerry",
    imgURL:
      "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hbmdvJTIwZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 2,
    name: "Grapes",
    imgURL:
      "https://images.unsplash.com/photo-1629003272097-bc6ac0a3b6d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHx3YXRlcm1lbG9uJTIwZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 3,
    name: "PineApple",
    imgURL:
      "https://images.unsplash.com/photo-1618871736709-0843f4cfc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGluZWFwcGxlfGVufDB8fDB8eWVsbG93fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 4,
    name: "Orange",
    imgURL:
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b3JhbmdlJTIwZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 5,
    name: "Apple",
    imgURL:
      "https://images.unsplash.com/photo-1576179636333-f13b174b3c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlJTIwZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
