import { combineReducers } from "redux"

import profile from "./profile"

const rootReducer = combineReducers({
    user: profile
})

export default rootReducer