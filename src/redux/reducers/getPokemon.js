import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE
} from '../constants/getPokemon-constants';

function pokemonReducer(state = {
  isFetching: false,
  didInvalidate: false,
  items: {}
}, action) {
  switch (action.type) {
  case GET_POKEMON_REQUEST:
    return {
      ...state,
      isFetching: true,
      didInvalidate: false
    };
  case GET_POKEMON_SUCCESS:
    return {
      ...state,
      isFetching: false,
      didInvalidate: false,
      items: action.items,
      lastUpdated: action.receivedAt
    };
  case GET_POKEMON_FAILURE:
    return {
      ...state,
      didInvalidate: true,
      error: action.error
    };
  default:
    return state;
  }
}

export default pokemonReducer;
