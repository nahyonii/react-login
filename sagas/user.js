import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from "../reducers/user";

// 사용자 정보 가져오기
// function loadUserAPI() {
//   return axios.get("/user", {
//     withCredentials: true,
//   });
// }

function* loadUser() {
  try {
    // const result = yield call(loadUserAPI);
    // 서버 사용안하고 값을 임의로 가져옴.
    const result = {
      data: {
        id: "star123",
        username: "홍길동",
      },
    };
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
