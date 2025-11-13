import React, { useState, useEffect } from "react";
import Search from "./Search.jsx";
import Product from "./Product.jsx";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // Fetch products from public/products.json
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Handle search input
  const handleSearch = (query) => {
    const result = products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* 🔍 Search Bar */}
      <Search onSearch={handleSearch} />

      {/* 🛒 Product Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p style={{ color: "#555" }}>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
