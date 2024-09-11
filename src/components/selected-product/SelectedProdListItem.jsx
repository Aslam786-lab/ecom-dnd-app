import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { DraggHandleIcon, RemoveIcon } from "../icons/Icons";
import ShowVariant from "./ShowVariant";
import SelectedProductInfo from "./SelectedProductInfo";
import Discount from "./Discount";
import SelectedVariantList from "./SelectedVariantList";
import { removeProduct } from "../../redux/productState";

import "../../styles/selected-product/SelectedProdListItem.css";

export default function SelectedProdListItem({
  isParent = false,
  selectedProduct,
  showRemoveIcon,
  handlePicker,
  index,
}) {
  const { attributes, listeners, setNodeRef, transition, transform } =
    useSortable({ id: selectedProduct.id });
  const [showVariants, setVariants] = useState(false);
  const dispatch = useDispatch();
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

  const handleRemoveProd = () => {
    const selectedId = isParent
      ? selectedProduct.id
        ? { productId: selectedProduct.id }
        : { productIndex: index }
      : { variantId: selectedProduct.id };
    dispatch(removeProduct(selectedId));
  };

  return (
    <div
      className={`product-item ${
        showRemoveIcon && isParent ? "with-border" : ""
      } `}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <div className={`selected-product-item ${isParent ? "" : "child"}`}>
        <div className="drag-handle" {...listeners}>
          <DraggHandleIcon />
        </div>
        <SelectedProductInfo
          uniqueId={uniqueId}
          title={title}
          selectedProduct={selectedProduct}
          index={index}
          onPickerClick={onPickerClick}
          isParent={isParent}
        />
        <Discount isParent={isParent} />
        {showRemoveIcon && (
          <div className="remove-icon" onClick={handleRemoveProd}>
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
        <SortableContext
          items={selectedProduct.variants.map((v) => v.id)}
          strategy={verticalListSortingStrategy}
        >
          <SelectedVariantList
            showVariants={showVariants}
            selectedProduct={selectedProduct}
          />
        </SortableContext>
      )}
    </div>
  );
}
