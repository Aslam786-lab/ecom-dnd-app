import { arrayMove } from "@dnd-kit/sortable";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [{ title: "", uniqueId: 1 }],
  productList: [],
  isLoading: false,
  pageNumber: 1,
  selectedPickerProduct: {},
  searchText: "",
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

const updateProducts = (state, products) => {
  const copyOfSelectedProd = [...state.selectedProducts];
  let prodIndex;
  if (state.selectedPickerProduct.productId) {
    prodIndex = copyOfSelectedProd.findIndex(
      (product) => product.id === state.selectedPickerProduct.productId
    );
  } else {
    prodIndex = state.selectedPickerProduct.index;
  }
  copyOfSelectedProd.splice(prodIndex, 1, ...products);
  return copyOfSelectedProd.map((product, idx) => ({
    ...product,
    uniqueId: idx + 1,
  }));
};

const updateEmptyProduct = (product) => {
  const uniqueId = product[product.length - 1].uniqueId + 1;
  return [...product, { title: "", uniqueId }];
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

const removeProductItem = (products, selectedId) => {
  let updatedProducts;
  if (selectedId.productId) {
    updatedProducts = products.filter(
      (product) => product.id !== selectedId.productId
    );
  } else if (selectedId.variantId) {
    updatedProducts = products.map((product) => ({
      ...product,
      variants: product.variants.filter(
        (variant) => variant.id !== selectedId.variantId
      ),
    }));
  } else {
    products.splice(selectedId.productIndex, 1);
    updatedProducts = products;
  }
  return updatedProducts;
};

const reorderProductItems = (state, reorderItems) => {
  const copyOfSelectedProd = [...state.selectedProducts];
  const activeId = reorderItems.active.id;
  const overId = reorderItems.over.id;

  if (copyOfSelectedProd.some((product) => product.id === activeId)) {
    const oldIndex = copyOfSelectedProd.findIndex(
      (product) => product.id === activeId
    );
    const newIndex = copyOfSelectedProd.findIndex(
      (product) => product.id === overId
    );

    return arrayMove(copyOfSelectedProd, oldIndex, newIndex);
  } else {
    const reorderedProd = copyOfSelectedProd.find((product) =>
      product.variants.some((variant) => variant.id === activeId)
    );
    const oldIndex = reorderedProd.variants.findIndex(
      (variant) => variant.id === activeId
    );
    const newIndex = reorderedProd.variants.findIndex(
      (variant) => variant.id === overId
    );

    const updatedProducts = copyOfSelectedProd.map((product) => {
      if (product.id === reorderedProd.id) {
        return {
          ...product,
          variants: arrayMove(product.variants, oldIndex, newIndex),
        };
      }
      return product;
    });
    return updatedProducts;
  }
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductReq: (state, action) => {
      state.isLoading = true;
      state.searchText = action.payload.searchText;
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
      state.selectedProducts = updateProducts(state, action.payload);
    },
    addEmptyProducts: (state) => {
      state.selectedProducts = updateEmptyProduct(state.selectedProducts);
    },
    removeProduct: (state, action) => {
      state.selectedProducts = removeProductItem(
        state.selectedProducts,
        action.payload
      );
    },
    updatePickerId: (state, action) => {
      state.selectedPickerProduct = action.payload;
    },
    reorderProducts: (state, action) => {
      state.selectedProducts = reorderProductItems(state, action.payload);
    },
    searchProducts: (state, action) => {},
  },
});

export const {
  fetchProductReq,
  fetchProductSuccess,
  toggleProduct,
  toggleVariant,
  addProducts,
  addEmptyProducts,
  removeProduct,
  updatePickerId,
  reorderProducts,
  searchProducts,
} = productSlice.actions;

export default productSlice.reducer;
