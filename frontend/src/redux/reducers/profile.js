const { LOGIN,LOGIN_LOADED,
    ADD_USER, ADD_USER_REQUESTED,
    FORM_SUBMIT_STATUS, USER_KEY,
    API_ERRORED, LOGOUT } = require("../constants")

const initialState = {
    profile: Object.assign({}, {
        email: "",
        state: ""
    }, JSON.parse(localStorage.getItem(USER_KEY))),
    formSubmitted: false,
    error: {
        message: ''
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN: {
            return Object.assign({}, state, {
                profile: action.payload.user,
                formSubmitted: false
            })
        }
        case LOGIN_LOADED: {
            return Object.assign({}, state, {
                profile: action.payload.user,
                formSubmitted: false
            })
        }
        case LOGOUT: {
            return Object.assign({}, state, {
                profile: action.payload.user
            })
        }
        case ADD_USER: {
            return Object.assign({}, state, {
                profile: action.payload.user,
                formSubmitted: false
            })
        }
        case ADD_USER_REQUESTED: {
            return Object.assign({}, state, {
                profile: action.payload.user,
                formSubmitted: false
            })
        }
        case API_ERRORED: {
            return Object.assign({}, state, {
                error: action.payload.error
            })
        }
        case FORM_SUBMIT_STATUS: {
            return Object.assign({}, state, {
                formSubmitted: action.payload.status
            })
        }
        default:
            return state
    }
}

export default reducer