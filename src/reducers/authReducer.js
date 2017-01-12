import * as types from '../actions/actionTypes';

function auth(state = {}, action) {
  switch(action.types){
    // SAVES THE TOKEN
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token: action.token
      };

    // LOG OUT - DISCARD TOKEN
    case AUTH_LOG_OUT:
      return {};

    // LOG IN
    case AUTH_LOG_IN:
      return {
        ...state,
        user: action.user
      };

    // DEFAULT STATE
    default:
      return state;
  }
};

module.exports = auth;
