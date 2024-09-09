import "../../styles/product-picker/ProductList.css";
import ProductListItem from "./ProductListItem";

export default function ProductList({ productList }) {
  return (
    <div className="product-list">
      <div className="product-wrapper">
        {productList.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
