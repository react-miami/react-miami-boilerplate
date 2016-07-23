import {
  BASIC_SET_SAMPLE,
} from '../constants/basic-constants';

function basicReducer(state = {}, action) {
  switch (action.type) {
  case BASIC_SET_SAMPLE:
    return {
      ...state,
      sample: action.value
    };
  default:
    return state;
  }
}

export default basicReducer;
