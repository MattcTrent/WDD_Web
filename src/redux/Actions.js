import { ActionTypes } from "./ActionTypes.js"

export const getContacts = (Contacts) => {
    return {
        type : ActionTypes.GET_CONTACTS,
        payload: Contacts
    }
}

export const selectContact = (Contact) => {
    return {
        type : ActionTypes.SELECT_SYSTEM_PARAMETER,
        payload: Contact
    }
}

export const updateSelectedContact = () => {
    return {
        type : ActionTypes.UPDATE_SELECTED_SYSTEM_PARAMETER,
    }
}

export const removeSelectedContact = () => {
    return {
        type : ActionTypes.REMOVE_SELECTED_SYSTEM_PARAMETER,
    }
}

export const createContact = (Contact) => {
    return {
        type : ActionTypes.CREATE_SYSTEM_PARAMETER,
        payload: Contact
    }
}

export const deleteContact = () => {
    return {
        type : ActionTypes.DELETE_SYSTEM_PARAMETER,
    }
}