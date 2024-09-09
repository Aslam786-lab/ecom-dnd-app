export const getSelectedProd = (productList) => {
  if (productList.length) {
    const updateIndeterminateProd = productList.map((product) => {
      if (product.indeterminate) {
        const selectedVariant = product.variants.filter(
          (variant) => variant.isChecked
        );
        return {
          ...product,
          variants: selectedVariant,
        };
      }
      return product;
    });

    const selectedProduct = updateIndeterminateProd.filter(
      (product) => product.isChecked || product.indeterminate
    );
    return selectedProduct;
  }
  return productList.length;
};
