import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductListItem from "./ProductListItem";
import { fetchProductReq } from "../../redux/productState";
import "../../styles/product-picker/ProductList.css";

export default function ProductList({ productList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const searchText = useSelector((state) => state.products.searchText);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPage > 1) {
      dispatch(
        fetchProductReq({ searchText: searchText, pageNum: currentPage })
      );
    }
  }, [currentPage, dispatch]);

  const handleScroll = useCallback(() => {
    const scrollable = document.getElementById("product-list-container");
    if (scrollable) {
      const bottom =
        scrollable.scrollHeight ===
        scrollable.scrollTop + scrollable.clientHeight;

      if (bottom) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }
  }, []);

  useEffect(() => {
    const scrollable = document.getElementById("product-list-container");
    scrollable.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollable) {
        scrollable.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <div className="product-list">
      <div id="product-list-container" className="product-wrapper">
        {productList.map((product, idx) => (
          <ProductListItem
            key={product.id}
            index={idx}
            productList={productList}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
