import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!keyword.trim()) {
      setError("Please enter a keyword");
      return;
    }

    setError("");
    onSearch(keyword.trim());
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          placeholder="Enter topic"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            setError("");
          }}
        />

        <button className="search-form__button" type="submit">
          Search
        </button>
      </form>

      {error && <p className="search-form__error">{error}</p>}
    </div>
  );
}

export default SearchForm;
