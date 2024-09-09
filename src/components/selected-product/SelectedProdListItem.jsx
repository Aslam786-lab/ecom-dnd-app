import { useState } from "react";
import { DraggHandleIcon, RemoveIcon } from "../icons/Icons";
import ShowVariant from "./ShowVariant";
import SelectedProductInfo from "./SelectedProductInfo";
import Discount from "./Discount";
import SelectedVariantList from "./SelectedVariantList";
import "../../styles/selected-product/SelectedProdListItem.css";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SelectedProdListItem({
  isParent = false,
  selectedProduct,
  showRemoveIcon,
  handlePicker,
}) {
  const { attributes, listeners, setNodeRef, transition, transform } =
    useSortable({ id: selectedProduct.id });
  const [showVariants, setVariants] = useState(false);
  const { title, uniqueId } = selectedProduct;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
  };

  const onPickerClick = () => {
    handlePicker();
  };

  const toggleVariants = () => {
    setVariants(!showVariants);
  };

  return (
    <div
      className={`product-item ${
        showRemoveIcon && isParent ? "with-border" : ""
      } `}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <div className={`selected-product-item ${isParent ? "" : "child"}`}>
        <div className="drag-handle">
          <DraggHandleIcon />
        </div>
        <SelectedProductInfo
          uniqueId={uniqueId}
          title={title}
          onPickerClick={onPickerClick}
          isParent={isParent}
        />
        <Discount isParent={isParent} />
        {showRemoveIcon && (
          <div className="remove-icon">
            <RemoveIcon />
          </div>
        )}
      </div>
      {isParent && selectedProduct.variants && (
        <ShowVariant
          showVariants={showVariants}
          toggleVariants={toggleVariants}
        />
      )}
      {isParent && selectedProduct.variants && (
        <SortableContext items={selectedProduct.variants.map((v) => v.id)}>
          <SelectedVariantList
            showVariants={showVariants}
            selectedProduct={selectedProduct}
          />
        </SortableContext>
      )}
    </div>
  );
}
