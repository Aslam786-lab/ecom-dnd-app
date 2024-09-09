import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../productState";
import productSaga from "../productSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware]),
});

sagaMiddleware.run(productSaga);
