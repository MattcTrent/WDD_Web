import { ActionTypes } from "./ActionTypes.js";

const initialState = {
    contacts: []
}

export const getContacts = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_CONTACTS:
            return { ...state, contacts: payload };
        default:
            return state;
    }
}

export const selectContact = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECT_CONTACT:
            return { ...state, ...payload };
        case ActionTypes.UPDATE_SELECTED_CONTACT:
            return { payload };
        case ActionTypes.REMOVE_SELECTED_CONTACT:
            return {};
        default:
            return state;
    }
}