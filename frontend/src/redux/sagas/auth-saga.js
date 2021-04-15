import { call, put, takeEvery } from "redux-saga/effects";
import history from "history/browser"
import { ADD_USER, API_ERRORED, API_URL, LOGIN, LOGIN_LOADED, USER_KEY, ADD_USER_REQUESTED, LOGOUT } from "../constants";


export default function* watcherSaga() {
    yield takeEvery(LOGIN, workerLoginSaga)
    yield takeEvery(ADD_USER, workerAddUserSaga)
    yield takeEvery(LOGOUT, workerLogoutSaga)
}

function* workerLoginSaga(action) {
    try {
        const payload = yield call(login, action.payload.userlogin)
        if(payload.status === 'success') {
            localStorage.setItem(USER_KEY, JSON.stringify(payload.user))
            // window.location.href = '/'
            yield put({type: LOGIN_LOADED, payload})
        } else {
            yield put({type: API_ERRORED, payload: payload})
        }
        
    } catch(e) {
        yield put({type: API_ERRORED, payload: e})
    }
}

function* workerAddUserSaga(action) {
    try {
        const payload = yield call(addUser, action.payload.user)
        if(payload.status === 'success') {            
            history.push("/login")            
            yield put({type: ADD_USER_REQUESTED, payload})
        } else {
            yield put({type: API_ERRORED, payload: payload.error})
        }
    } catch(e) {
        yield put({type: API_ERRORED, payload: e})
    }
}

function* workerLogoutSaga(action) {
    yield call(logout)
}

function login( userlogin ) {
    return fetch(
        API_URL + "/auth/signin",
        {
            method: 'POST',
            body: JSON.stringify(userlogin),
            headers: {
                'Content-Type': 'application/json'
            }
        }        
    ).then(response => response.json())
    .catch(e => {
        console.log(e)
    })
}

function logout() {
    localStorage.removeItem(USER_KEY)
    return {
        user: null
    }
}

function addUser(user) {
    console.log(user)
    return fetch(
        API_URL + "/auth/signup",
        {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }        
    ).then(response => response.json())
    .catch(e => {
        console.log(e)
    })
}