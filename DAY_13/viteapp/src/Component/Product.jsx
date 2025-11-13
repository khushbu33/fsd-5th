import React from "react";

const Product = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <strong>₹{product.price}</strong>
    </div>
  );
};

export default Product;

