import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const HeaderSearch = () => {
  const [searchResult, setSearchResult] = useState([]);
  const { clothing } = useSelector((store) => store.catalog);

  const searchDis = (e) => {
    const filterData = clothing.filter((item) => {
      if (e.target.value === "") {
        return null;
      }
      if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return item;
      }
    });
    if (filterData.length === 0 && e.target.value.length !== 0) {
      setSearchResult([{ title: "Not found" }]);
    } else {
      setSearchResult(filterData);
    }
  };

  return (
    <div className="headerNav__srch">
      <input
        className="headerNav__search"
        type="text"
        placeholder="Search for..."
        onChange={searchDis}
      />
      {!!searchResult.length && (
        <div className="headerNav__search__res">
          {searchResult.map(({ title }) => {
            return <p>{title}</p>;
          })}
        </div>
      )}
    </div>
  );
};
export default HeaderSearch;
