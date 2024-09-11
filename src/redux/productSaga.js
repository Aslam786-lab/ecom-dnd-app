import { call, put, takeEvery } from "redux-saga/effects";
import { fetchProductReq, fetchProductSuccess } from "./productState";
import { apiKey, fetchProductApi } from "./constants";
// import { fetchP } from "../db";

function* fetchProduct({ payload }) {
  try {
    const { searchText, pageNum } = payload;
    const resp = yield call(fetch, fetchProductApi(searchText, pageNum), {
      method: "GET",
      headers: {
        "X-API-KEY": apiKey,
        "Content-Type": "application/json",
      },
    });
    const data = yield resp.json();
    // const resp = yield fetchP();
    yield put(fetchProductSuccess(data));
  } catch (error) {
    console.error("failed to fetch products", error);
  }
}

export default function* productSaga() {
  yield takeEvery(fetchProductReq, fetchProduct);
}
