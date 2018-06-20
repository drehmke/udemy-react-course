import axios from 'axios'
import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import * as actions from '../actions/index'



export function* logoutSaga(action) {
  yield call([localStorage, 'removeItem'], 'token')
  yield call([localStorage, 'removeItem'], 'expirationDate')
  yield call([localStorage, 'removeItem'], 'userId')
  yield put( actions.logoutSucceed() )
}

export function* checkAuthTimeoutSaga(action) {
  yield delay( action.expirationTime * 1000 )
  yield put( actions.logout() )
}

export function* authUserSaga(action) {
  yield put(actions.authStart())

  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  }

  let url= 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBJbW1E1o8xACVCt97rZ_NRc18GO2jTt6I'
  if( !action.isSignup) {
      url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBJbW1E1o8xACVCt97rZ_NRc18GO2jTt6I'
  }

  try {
    const response = yield axios.post(url, authData)
    const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000)
    yield localStorage.setItem('token', response.data.idToken)
    yield localStorage.setItem('expirationDate', expirationDate)
    yield localStorage.setItem('userId', response.data.localId)
    yield put(actions.authSuccess(response.data.idToken, response.data.localId))
    yield put(actions.checkAuthTimeout(response.data.expiresIn))
  } catch ( error ) {
    yield put(actions.authFail(error.response.data.error))
  }

}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem('token')
  if( !token ) {
      yield put (actions.logout())
  } else {
      const expirationDate = yield localStorage.getItem('expirationDate')
      if( expirationDate <= new Date() ) {
          yield put(actions.logout())
      } else {
          const userId = yield localStorage.getItem('userId')
          yield put(actions.authSuccess(token, userId))
          yield put(actions.checkAuthTimeout( (new Date(expirationDate).getTime() - new Date().getTime())/1000) )
      }
  }
}


// https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]
// https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]
// apiKey: "AIzaSyBJbW1E1o8xACVCt97rZ_NRc18GO2jTt6I"
// need to send:
// email	string	The email for the user to create.
// password	string	The password for the user to create.
// returnSecureToken	boolean	Whether or not to return an ID and refresh token. Should always be true.
