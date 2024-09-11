import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import PickerHeader from "./PickerHeader";
import ProductSearch from "./ProductSearch";
import PickerFooter from "./PickerFooter";
import { fetchProductReq } from "../../redux/productState";
import Loader from "./Loader";
import ProductList from "./ProductList";
import "../../styles/product-picker/ProductPicker.css";

export default function ProductPicker({ togglePicker }) {
  const { productList, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductReq({ searchText: "", pageNum: 1 }));
  }, []);

  return (
    <div className="product-picker">
      <div className="product-modal">
        <PickerHeader togglePicker={togglePicker} />
        <ProductSearch />
        {isLoading && productList.length === 0 ? (
          <Loader />
        ) : (
          <ProductList productList={productList} />
        )}
        <PickerFooter productList={productList} togglePicker={togglePicker} />
      </div>
    </div>
  );
}
