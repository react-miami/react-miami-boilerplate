import {
  BASIC_SET_SAMPLE,
} from '../constants/basic-constants';


// Global.
export function setSample(value) {
  return {
    type: BASIC_SET_SAMPLE,
    value
  };
}
