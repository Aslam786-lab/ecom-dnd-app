import { useSelector } from "react-redux";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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
      <SortableContext
        items={selectedProducts.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        {selectedProducts.map((selectedProduct, idx) => (
          <SelectedProdListItem
            key={selectedProduct.id || idx}
            uniqueSortableId={`product-${selectedProduct.id}`}
            selectedProduct={selectedProduct}
            index={idx}
            showRemoveIcon={isRemoveIcon}
            handlePicker={handlePicker}
            isParent
          />
        ))}
      </SortableContext>
    </div>
  );
}
