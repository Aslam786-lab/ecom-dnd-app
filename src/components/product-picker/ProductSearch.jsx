import { SearchIcon } from "../icons/Icons";

export default function ProductSearch() {
  return (
    <>
      <div className="product-search">
        <div className="picker-search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <input placeholder="Search Product" />
        </div>
      </div>
      <div className="horizontal-line" />
    </>
  );
}
