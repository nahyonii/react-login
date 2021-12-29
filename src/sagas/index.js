import { all, call } from "redux-saga/effects";
import axios from "axios";
import user from "./user";

//서버 api 주소 설정 부분입니다. 사용 중인 주소로 수정하시면 됩니다.
axios.defaults.baseURL = "http://15.165.28.19:4000/api";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([call(user)]);
}
