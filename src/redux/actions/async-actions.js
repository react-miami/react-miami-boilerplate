import {
  ASYNC_FETCH_REQUEST,
  ASYNC_FETCH_SUCCESS,
  ASYNC_FETCH_FAILURE
} from '../constants/async-constants';

import utils from '../../utils';


// Async Action creators
// Tenant
export function fetchTenantRequest(paramUrl) {
  return {
    type: ASYNC_FETCH_REQUEST,
    paramUrl
  };
}

export function fetchTenantSuccess(paramUrl, json) {
  return {
    type: ASYNC_FETCH_SUCCESS,
    paramUrl,
    items: json,
    receivedAt: Date.now()
  };
}

export function fetchTenantFailure(paramUrl, error) {
  return {
    type: ASYNC_FETCH_FAILURE,
    paramUrl,
    error
  };
}

export function fetchTenant(paramUrl, globalSettings) {
  const url = `${globalSettings.apiUrl}/tenant/url/${paramUrl}`;
  const sHeaders = utils.getRestHeaders();
  const sInit = {
    method: 'GET',
    headers: sHeaders
  };

  return (dispatch) => {
    dispatch(fetchTenantRequest(paramUrl));

    return fetch(url, sInit)
      .then(response => response.json())
      .then(json => {
        if (json.ErrorMessage) {
          return dispatch(fetchTenantFailure(paramUrl, json));
        }
        return dispatch(fetchTenantSuccess(paramUrl, json));
      })
      .catch(error => {
        return dispatch(fetchTenantFailure(paramUrl, error));
      });
  };
}
