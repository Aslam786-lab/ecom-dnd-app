import { useDispatch } from "react-redux";
import { getSelectedProd } from "../../product-helper";
import { addProducts } from "../../redux/productState";

export default function PickerFooter({ productList, togglePicker }) {
  const selectedProduct = getSelectedProd(productList);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (selectedProduct.length) {
      dispatch(addProducts(selectedProduct));
      togglePicker();
    }
  };

  return (
    <>
      <div className="horizontal-line" />
      <div className="picker-footer">
        <span>{selectedProduct.length} product selected</span>
        <div className="footer-btn">
          <button className="cancel-btn" onClick={() => togglePicker()}>
            Cancel
          </button>
          <button className="add-btn" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}
