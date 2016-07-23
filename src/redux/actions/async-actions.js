import {
  ASYNC_SAMPLE_REQUEST,
  ASYNC_SAMPLE_SUCCESS,
  ASYNC_SAMPLE_FAILURE
} from '../constants/async-constants';

import utils from '../../utils';


// Async Action creators
// Sample
export function fetchSampleRequest(paramUrl) {
  return {
    type: ASYNC_SAMPLE_REQUEST,
    paramUrl
  };
}

export function fetchSampleSuccess(paramUrl, json) {
  return {
    type: ASYNC_SAMPLE_SUCCESS,
    paramUrl,
    items: json,
    receivedAt: Date.now()
  };
}

export function fetchSampleFailure(paramUrl, error) {
  return {
    type: ASYNC_SAMPLE_FAILURE,
    paramUrl,
    error
  };
}

export function fetchSample(paramUrl) {
  const url = `http://json.api.com/${paramUrl}`;
  const sHeaders = utils.getRestHeaders();
  const sInit = {
    method: 'GET',
    headers: sHeaders
  };

  return (dispatch) => {
    dispatch(fetchSampleRequest(paramUrl));

    return fetch(url, sInit)
      .then(response => response.json())
      .then(json => {
        if (json.ErrorMessage) {
          return dispatch(fetchSampleFailure(paramUrl, json));
        }
        return dispatch(fetchSampleSuccess(paramUrl, json));
      })
      .catch(error => {
        return dispatch(fetchSampleFailure(paramUrl, error));
      });
  };
}
