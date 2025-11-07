import { useState, useEffect } from "react";
import "./App.css";
import productData from "./product.json";

// 🧭 Header (now includes Search bar)
const Header = ({ filterHandler }) => {
  return (
    <div className="header">
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>

      {/* Single working search bar */}
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => filterHandler(e.target.value)}
      />
    </div>
  );
};

const Product = ({ item }) => {
  return (
    <div className="product">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span>Price: ${item.price}</span>
    </div>
  );
};

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Load products from imported JSON
    setProducts(productData);
    setFilteredProducts(productData);

    // OR if fetching dynamically from public folder:
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filterHandler = (query) => {
    const updatedList = products.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(updatedList);
  };

  return (
    <div className="body">
      <div className="product-list">
        {filteredProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>© 2025 Amazon Clone - All rights reserved</p>
    </footer>
  );
};

function App() {
  const [filterQuery, setFilterQuery] = useState("");
  const [products, setProducts] = useState(productData);
  const [filteredProducts, setFilteredProducts] = useState(productData);

  useEffect(() => {
    const updatedList = products.filter((item) =>
      item.title.toLowerCase().includes(filterQuery.toLowerCase())
    );
    setFilteredProducts(updatedList);
  }, [filterQuery]);

  return (
    <div className="app">
      <Header filterHandler={setFilterQuery} />
      <div className="body">
        <div className="product-list">
          {filteredProducts.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
