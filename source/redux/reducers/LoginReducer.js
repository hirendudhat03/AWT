/* Login Reducer
 * handles login states in the app
 */
import CreateReducer from './CreateReducer';
import * as types from '../types/Type';

const initialState = {
  isLoggedIn: false,
  token: "",
  username: '',
  password: '',
  user: {},
  email: "",
  isFromRegister: false
};

console.log('call loginReducer');

export const LoginReducer = CreateReducer(initialState, {
  [types.LOGIN_REQUEST](state, action) {
    return {
      ...state,
      username: action.username,
      password: action.password,
    };
  },
  [types.LOGIN_RESPONSE](state, action) {
    var token = action.response.token
    if (token == undefined) {
      token = action.response.user.token
    }
    return {
      ...state,
      token: token,
      isLoggedIn: true,
      user: action.response.user,
      isFromRegister: false

    };
  },
});
