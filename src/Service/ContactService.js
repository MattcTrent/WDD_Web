import { Constants } from "./Constants.js"
import axios from 'axios';

export class ContactService {

  static async getContacts() {
    console.log(Constants.API_URL + "/Contacts");
    return await axios.get(Constants.API_URL + "/Contacts").catch((error) => {
      console.log("Error: ", error)
    });
  };

  static async getContact(ContactId) {
    return await axios.get(Constants.API_URL + "/Contacts/" + ContactId).catch((error) => {
      console.log("Error: ", error)
    });
  };

  static async createContact(Contact) {
    return await axios.post(Constants.API_URL + "/Contacts", Contact).catch((error) => {
      console.log("Error: ", error)
    });
  };

  static async updateContact(ContactId, Contact) {
    return await axios.put(Constants.API_URL + "/Contacts/" + ContactId, Contact).catch((error) => {
      console.log("Error: ", error)
    });
  };

  static async deleteContact(ContactId) {
    return await axios.delete(Constants.API_URL + "/Contacts/" + ContactId).catch((error) => {
      console.log("Error: ", error)
    });
  };
}