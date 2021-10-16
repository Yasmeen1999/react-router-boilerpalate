import React, { useState } from "react";
import { Link } from "react-router-dom";

const data = {
  products: [
    { id: 123, name: "Fozzil Brand Wrist watch" },
    { id: 231, name: "Fozzil Brand Analog Watch" },
    { id: 321, name: "Fozzil Brand Digial Watch" },
  ],
};

const Product = (props) => {
  const [products, setProducts] = useState(data.products);

  return (
    <div>
      <p>Product List</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
