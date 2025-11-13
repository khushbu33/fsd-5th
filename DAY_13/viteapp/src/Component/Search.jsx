import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search watches..."
        value={query}
        onChange={handleChange}
        style={{ padding: "8px", width: "200px", marginRight: "10px" }}
      />
      <button onClick={() => onSearch(query)}>Search</button>
    </div>
  );
};

export default Search;

