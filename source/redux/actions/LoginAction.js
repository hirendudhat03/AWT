import * as types from '../types/Type';

export function requestLogin(username, password,fcmToken, navigation) {
  console.log('call requestLogin');
  console.log('\n',username,'\n',password,'\n',fcmToken,'\n',navigation);
  return {
    type: types.LOGIN_REQUEST,
    username,
    password,
    fcmToken,
    navigation
  };
}

export function onLoginResponse(response) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}