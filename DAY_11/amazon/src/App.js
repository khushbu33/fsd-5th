// App.js
import "./App.css";

const Header = () => {
  return (
    <div id="header">
      <img
        className="logo"
        src="https://th.bing.com/th?q=Amazon+Official+Logo&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
        alt="Amazon Logo"
      />
      <h2>Amazon</h2>
      <ul className="nav-items">
        <li>Home</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search products..." />
      <button>Search</button>
    </div>
  );
};

const ProductCard = () => {
  return (
    <div className="product-card">
      <img src="" alt="Product" />
      <h3>Product Name</h3>
      <p>Product Description</p>
      <span>Price: $0.00</span>
    </div>
  );
};

const Body = () => {
  return (
    <div id="body">
      <h1>Search</h1>
      <SearchBar />
      <h1>Products</h1>
      <ProductCard />
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

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default App;
