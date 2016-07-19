import {
  BASIC_SET_API_URL,
} from '../constants/basic-constants';


// Global.
export function setApiUrl(value) {
  return {
    type: BASIC_SET_API_URL,
    value
  };
}
