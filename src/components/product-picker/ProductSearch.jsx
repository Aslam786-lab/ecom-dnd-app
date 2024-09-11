import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { SearchIcon } from "../icons/Icons";
import { fetchProductReq } from "../../redux/productState";
import { debounce } from "../../product-helper";

export default function ProductSearch() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const debouncedSearch = useCallback(
    debounce(
      (value) => dispatch(fetchProductReq({ searchText: value, pageNum: 1 })),
      1000
    ),
    []
  );

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    debouncedSearch(e.target.value);
  };
  return (
    <>
      <div className="product-search">
        <div className="picker-search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <input
            placeholder="Search Product"
            onChange={handleSearch}
            value={searchText}
          />
        </div>
      </div>
      <div className="horizontal-line" />
    </>
  );
}
