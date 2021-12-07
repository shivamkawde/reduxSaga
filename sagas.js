import { takeEvery, takeLatest, put, call } from "redux-saga/effects";
import { mainReducer } from "./Reducer";

let getData = async () => {
  let data = await fetch("/userData/allUser");
  let mainData = await data.json();
  return mainData;
};

function* fetchData() {
  let response = yield call(getData);
  console.log(response);
  //   ans = await response.json();
  //   console.log(ans);
  yield put({ type: "data", data: response });
}

const handleNewMessage = function* handleNewMessage(params) {
  const socket = new WebSocket("ws://localhost:8000");
  let ans;

  console.log("ham saga me hai");
  //
  yield takeEvery("increment", fetchData);
  yield takeEvery("getUsers", fetchData);
};

export default handleNewMessage;
