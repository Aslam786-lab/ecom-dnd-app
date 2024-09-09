import { call, put, select, takeEvery } from "redux-saga/effects";
import { fetchProductReq, fetchProductSuccess } from "./productState";
import { fetchP } from "../db";

function* fetchProduct() {
  try {
    const resp = yield fetchP();
    // if (resp.ok) {
    yield put(fetchProductSuccess(resp));
    // }
  } catch (error) {}
}

export default function* productSaga() {
  yield takeEvery(fetchProductReq, fetchProduct);
}
