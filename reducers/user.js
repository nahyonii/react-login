export const initialState = {
  me: null,
  isLoggedIn: false,
};

//사용자 정보 불러오는 액션
export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      return {
        ...state,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        me: action.data,
        isLoggedIn: true,
      };
    case LOAD_USER_FAILURE:
      return {
        ...state,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
