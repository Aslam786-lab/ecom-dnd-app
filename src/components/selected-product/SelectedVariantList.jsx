import SelectedProdListItem from "./SelectedProdListItem";

export default function SelectedVariantList({ showVariants, selectedProduct }) {
  if (!showVariants || !selectedProduct.variants.length) {
    return null;
  }
  const isRemoveIcon = selectedProduct.variants.length > 1;

  return (
    <div className="select-variant-list">
      {selectedProduct.variants.map((selectedVariant) => (
        <SelectedProdListItem
          key={selectedVariant.id}
          uniqueSortableId={`variant-${selectedVariant.id}`}
          showRemoveIcon={isRemoveIcon}
          selectedProduct={selectedVariant}
          handlePicker={() => {}}
        />
      ))}
    </div>
  );
}
