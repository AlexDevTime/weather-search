import React from "react";
import searchButton from "../images/searchButton.png"

const SearchForm = ({ handleChange, handleSubmit, cityInput }) => {

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Weather in your city..."
        value={cityInput}
        onChange={handleChange}
      />
      <div className="search-button">
        <button><img src={searchButton} alt="button" /></button>
      </div>
    </form>
  )
}
export default SearchForm;