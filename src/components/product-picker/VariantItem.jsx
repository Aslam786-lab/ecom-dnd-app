import { useDispatch } from "react-redux";

import { toggleVariant } from "../../redux/productState";
import "../../styles/product-picker/VariantItem.css";

export default function VariantItem({ variant, productId }) {
  const { id, title, price, isChecked, inventory_quantity } = variant;
  const dispatch = useDispatch();

  const handleVariantToggle = () => {
    dispatch(toggleVariant({ productId, variantId: id }));
  };

  return (
    <>
      <div className="variant-item">
        <div className="variant-content">
          <input
            type="checkbox"
            className="variant-check"
            checked={isChecked}
            onChange={handleVariantToggle}
          />
          <span className="variant-title">{title}</span>
        </div>
        <div className="variant-quantity">
          <span className="variant-stock">
            {Math.abs(inventory_quantity) || 99} available
          </span>
          <span>${price}</span>
        </div>
      </div>
      <div className="horizontal-line" />
    </>
  );
}
