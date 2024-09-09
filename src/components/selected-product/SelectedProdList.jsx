import { useSelector } from "react-redux";
import { SortableContext } from "@dnd-kit/sortable";
import "../../styles/selected-product/SelectedProdList.css";
import SelectedProdListItem from "./SelectedProdListItem";

export default function SelectedProdList({ handlePicker }) {
  const selectedProducts = useSelector(
    (state) => state.products.selectedProducts
  );
  const isRemoveIcon = selectedProducts.length > 1;
  return (
    <div className="selected-product">
      <div className="selected-product-header">
        <span>Product</span>
        <span>Discount</span>
      </div>
      <SortableContext items={selectedProducts.map((item) => item.id)}>
        {selectedProducts.map((selectedProduct) => (
          <SelectedProdListItem
            key={selectedProduct.id}
            uniqueSortableId={`product-${selectedProduct.id}`}
            selectedProduct={selectedProduct}
            showRemoveIcon={isRemoveIcon}
            handlePicker={handlePicker}
            isParent
          />
        ))}
      </SortableContext>
    </div>
  );
}
