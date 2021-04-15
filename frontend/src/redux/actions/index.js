import { ADD_USER, FORM_SUBMIT_STATUS,
    LOGIN, UPDATE_USER, LOGOUT } from "../constants";

export const ActionCreators = {
    addUser: (user) => ({type: ADD_USER, payload: { user }}),
    updateProfile: (user) => ({type: UPDATE_USER, payload: { user }}),
    formSubmitStatus: (status) => ({type: FORM_SUBMIT_STATUS, payload: { status }}),
    login: (userlogin) => ({type: LOGIN, payload: { userlogin }}),
    logout: () => ({type: LOGOUT, payload: { user: null }})
}