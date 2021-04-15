const { LOGOUT } = require("../constants")


export function logoutMiddleware({dispatch}) {
    return function(next) {
        return function(action) {
            if(action.type === LOGOUT) {

            }
        }
    }
}