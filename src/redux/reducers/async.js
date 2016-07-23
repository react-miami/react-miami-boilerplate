import {
  ASYNC_SAMPLE_REQUEST,
  ASYNC_SAMPLE_SUCCESS,
  ASYNC_SAMPLE_FAILURE
} from '../constants/async-constants';

function asyncReducer(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
  case ASYNC_SAMPLE_REQUEST:
    return {
      ...state,
      isFetching: true,
      didInvalidate: false
    };
  case ASYNC_SAMPLE_SUCCESS:
    return {
      ...state,
      isFetching: false,
      didInvalidate: false,
      items: action.tenant,
      lastUpdated: action.receivedAt
    };
  case ASYNC_SAMPLE_FAILURE:
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
