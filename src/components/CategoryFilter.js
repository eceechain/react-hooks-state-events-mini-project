import React from "react";

const CategoryFilter = ({ onFilter, categories }) => {
 const handleFilterClick = (category) => {
    onFilter(category);
 };

 return (
    <div className="categories">
      <h5>Category filters</h5>
      <button className="selected" onClick={() => handleFilterClick("All")}>
        All
      </button>
      {categories.map((category) => (
        <button key={category} onClick={() => handleFilterClick(category)}>
          {category}
        </button>
      ))}
    </div>
 );
};

export default CategoryFilter;