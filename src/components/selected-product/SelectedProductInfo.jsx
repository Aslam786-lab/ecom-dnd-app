import { useDispatch } from "react-redux";

import { PickerIcon } from "../icons/Icons";
import { updatePickerId } from "../../redux/productState";

export default function SelectedProductInfo({
  uniqueId,
  title,
  onPickerClick,
  selectedProduct,
  isParent,
  index,
}) {
  const dispatch = useDispatch();

  const handlePicker = () => {
    dispatch(
      updatePickerId(
        selectedProduct.id ? { productId: selectedProduct.id } : { index }
      )
    );
    onPickerClick();
  };

  return (
    <>
      {isParent && <span>{uniqueId}.</span>}
      <div className={`select-product ${isParent ? "" : "child"}`}>
        <input placeholder="Select Product" disabled value={title} />
        {isParent && (
          <button className="select-product-btn" onClick={handlePicker}>
            <PickerIcon />
          </button>
        )}
      </div>
    </>
  );
}
