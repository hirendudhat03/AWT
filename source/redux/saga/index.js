/**
 *  Redux saga class init
 */
import {takeEvery, takeLeading, all} from 'redux-saga/effects';
import * as types from '../types/Type';
import * as LoginSaga from './LoginSaga';
import * as HomeSaga from './HomeSaga';
//  import * as FeedbackSaga from './FeedbackSaga';

export default function* watch() {
  yield all([takeLeading(types.LOGIN_REQUEST, LoginSaga.loginAsync)]);
  yield all([takeLeading(types.HOME_REQUEST, HomeSaga.homeAsync)]);
  //    yield all([takeLeading(types.FEEDBACK_REQUEST, FeedbackSaga.feedbackAsync)]);
}
