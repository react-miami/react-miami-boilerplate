import {
  BASIC_SET_API_URL,
} from '../constants/basic-constants';

function basicReducer(state = {}, action) {
  switch (action.type) {
  case BASIC_SET_API_URL:
    return {
      ...state,
      apiUrl: action.value
    };
  default:
    return state;
  }
}

export default basicReducer;
