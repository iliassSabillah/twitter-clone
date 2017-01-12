import * as types from './actionTypes';
import axios from 'axios';

import {AUTH_SET_TOKEN, AUTH_LOG_OUT, AUTH_LOG_IN } from '../components/common/constant';

export function authSetToken(token) {
  return {
    type: AUTH_SET_TOKEN,
    token
  }
};

export function authLogOut() {
  return {
    type: AUTH_LOG_OUT,
  }
};

export function authLogIn() {
  return {
    type: AUTH_LOG_IN,
  }
};
