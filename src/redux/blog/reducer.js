
import * as types from "./types";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_FETCH_USERS:
      return { ...state, loading: true };
    case types.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case types.FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default usersReducer;