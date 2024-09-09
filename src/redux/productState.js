import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [{ title: "", uniqueId: 1 }],
  productList: [],
  isLoading: false,
};

const addIsChecked = (product, initialList) => {
  if (product.length) {
    return product.map((product) => ({
      ...product,
      isChecked: false,
      variants: product.variants?.map((variant) => ({
        ...variant,
        isChecked: false,
      })),
    }));
  }
  return initialList;
};

const addUniqueId = (products) => {
  return products.map((product, idx) => ({ ...product, uniqueId: idx + 1 }));
};

const updateProductSelection = (state, productId) => {
  const updatedProducts = state.productList.map((product) => {
    if (product.id === productId) {
      const isChecked = !product.isChecked;

      return {
        ...product,
        isChecked,
        indeterminate: false,
        variants: product.variants.map((variant) => ({
          ...variant,
          isChecked,
        })),
      };
    }
    return product;
  });
  return updatedProducts;
};

const updateVariantSelection = (state, productId, variantId) => {
  const updatedProducts = state.productList.map((product) => {
    if (product.id === productId) {
      const updatedVariants = product.variants.map((variant) => {
        if (variant.id === variantId) {
          return { ...variant, isChecked: !variant.isChecked };
        }
        return variant;
      });

      const allChecked = updatedVariants.every((variant) => variant.isChecked);
      const someChecked = updatedVariants.some((variant) => variant.isChecked);

      return {
        ...product,
        isChecked: allChecked,
        indeterminate: someChecked && !allChecked,
        variants: updatedVariants,
      };
    }
    return product;
  });

  return updatedProducts;
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductReq: (state) => {
      state.isLoading = true;
    },
    fetchProductSuccess: (state, action) => {
      state.productList = addIsChecked(action.payload, state.productList);
      state.isLoading = false;
    },
    toggleProduct: (state, action) => {
      state.productList = updateProductSelection(state, action.payload);
    },
    toggleVariant: (state, action) => {
      const { productId, variantId } = action.payload;
      state.productList = updateVariantSelection(state, productId, variantId);
    },
    addProducts: (state, action) => {
      state.selectedProducts = addUniqueId(action.payload);
    },
  },
});

export const {
  fetchProductReq,
  fetchProductSuccess,
  toggleProduct,
  toggleVariant,
  addProducts,
} = productSlice.actions;

export default productSlice.reducer;
