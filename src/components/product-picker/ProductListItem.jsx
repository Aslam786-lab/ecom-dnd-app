import { useDispatch } from "react-redux";
import VariantItem from "./VariantItem";
import { toggleProduct } from "../../redux/productState";

export default function ProductListItem({ product }) {
  const { id, title, variants, image, isChecked, indeterminate } = product;
  const dispatch = useDispatch();

  const handleProductToggle = () => {
    dispatch(toggleProduct(id));
  };

  return (
    <>
      <div className="product-list-item">
        <div className="product">
          <input
            style={{ background: indeterminate && "red" }}
            type="checkbox"
            className={`product-check ${indeterminate ? "indeterminate" : ""}`}
            checked={isChecked}
            ref={(el) => el && (el.indeterminate = indeterminate)}
            onChange={handleProductToggle}
          />
          <img src={image.src} alt="product-img" />
          <span className="product-title">{title}</span>
        </div>
      </div>
      <div className="horizontal-line" />
      {variants.length > 0 &&
        variants.map((variant) => (
          <VariantItem key={variant.id} variant={variant} productId={id} />
        ))}
    </>
  );
}
