import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE
} from '../constants/getPokemon-constants';


// Async Action creators
// Pokemon
export function fetchPokemonRequest(paramUrl) {
  return {
    type: GET_POKEMON_REQUEST,
    paramUrl
  };
}

export function fetchPokemonSuccess(paramUrl, json) {
  return {
    type: GET_POKEMON_SUCCESS,
    paramUrl,
    items: json,
    receivedAt: Date.now()
  };
}

export function fetchPokemonFailure(paramUrl, error) {
  return {
    type: GET_POKEMON_FAILURE,
    paramUrl,
    error
  };
}

export function fetchPokemon(paramUrl) {
  return (dispatch) => {
    dispatch(fetchPokemonRequest(paramUrl));

    return fetch(paramUrl)
      .then(response => response.json())
      .then(json => {
        return dispatch(fetchPokemonSuccess(paramUrl, json));
      })
      .catch(error => {
        return dispatch(fetchPokemonFailure(paramUrl, error));
      });
  };
}
