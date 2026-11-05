import { useState } from "react";
import "./SearchForm.css";

function SearchForm() {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", keyword);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter topic"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
