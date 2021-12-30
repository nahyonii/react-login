import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from "../reducers/user";
import axios from "axios";

// 사용자 정보 가져오기
// http://15.165.28.19:4000/api/user 주소로 데이터 가져옵니다.
// 서버로 API 생성하시면 아래 주석 해제해주시면 됩니다.
function loadUserAPI() {
  return axios.get("/hello");
}

function* loadUser() {
  try {
    // 서버로 API 생성하시면 아래 주석 해제해주시면 됩니다.
    const result = yield call(loadUserAPI);

    // 서버 사용안하고 값을 임의로 가져오게 했습니다.
    // const result = {
    //   data: {
    //     id: "star123",
    //     username: "홍길동",
    //   },
    // };

    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e,
    });
  }
}

function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

export default function* userSaga() {
  yield all([fork(watchLoadUser)]);
}
