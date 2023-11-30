
import * as types from './types';

export const fetchUserRequest = () => ({
    type: types.LOAD_FETCH_USERS
});

export const fetchUserSuccess = (users) => ({
    type: types.FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUserFailure = (error) => ({
    type: types.FETCH_USERS_FAILURE,
    payload: error
});

