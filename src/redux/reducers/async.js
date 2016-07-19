import {
  ASYNC_FETCH_REQUEST,
  ASYNC_FETCH_SUCCESS,
  ASYNC_FETCH_FAILURE
} from '../constants/async-constants';

function asyncReducer(state = {
  isFetching: true,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
  case ASYNC_FETCH_REQUEST:
    return {
      ...state,
      isFetching: true,
      didInvalidate: false
    };
  case ASYNC_FETCH_SUCCESS:
    return {
      ...state,
      isFetching: false,
      didInvalidate: false,
      items: action.tenant,
      lastUpdated: action.receivedAt
    };
  case ASYNC_FETCH_FAILURE:
    return {
      ...state,
      didInvalidate: true,
      error: action.error
    };
  default:
    return state;
  }
}

export default asyncReducer;
