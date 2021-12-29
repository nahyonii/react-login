import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";

// (이전상태, 액션) => 다음 상태
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
