import React, { useEffect } from "react";
import "./search.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  clothingLoader,
  clothingLoaderFailed,
  clothingLoaderSuccess,
} from "../../store/actions/clothingActions";
import { getClothing } from "../../api/clothing";

const HeaderSearch = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { clothing } = useSelector((store) => store.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!clothing) {
      dispatch(clothingLoader());
      getClothing()
        .then(({ data }) => {
          dispatch(clothingLoaderSuccess(data));
        })
        .catch((error) => {
          dispatch(clothingLoaderFailed(error.message));
        });
    }
  }, []);

  const closeSearch = () => {
    setSearchInput("");
    setSearchResult([]);
  };

  const searchDis = (e) => {
    setSearchInput(e.target.value);

    const filterData = clothing.filter((item) => {
      if (e.target.value === "") return null;

      if (item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        return item;
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
        value={searchInput}
      />
      {!!searchResult.length && (
        <div className="headerNav__search__res">
          {searchResult.map(({ title, id }, index) => {
            return !!id ? (
              <Link
                to={`/ProductPage/${id}`}
                onClick={closeSearch}
                key={`srch_${id}`}
              >
                <p className="headerNav__search__res__item" title={title}>
                  {title}
                </p>
              </Link>
            ) : (
              <p
                key={`srch_${id}`}
                className="headerNav__search__res__item_active"
              >
                {title}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default HeaderSearch;
