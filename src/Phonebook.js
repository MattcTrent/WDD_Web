import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { RiContactsBookFill } from 'react-icons/ri'
import { ContactService } from "./Service/ContactService.js";
import { getContacts } from './redux/Actions.js';
import { Contact } from "./Components/Contact.js";

export const Phonebook = () => {

  const Contacts = useSelector((state) => state.allContacts);
  const dispatch = useDispatch();

  const fetchContacts = async () => {
    ContactService.getContacts().then((response) => {
      if (response.data) {
        dispatch(getContacts(response.data));
        console.log(response.data);
        console.log(Contacts);
      }
    });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <RiContactsBookFill></RiContactsBookFill> Phone Book App
        <table>
          <tbody>
            {Contacts.contacts.map((contact) => (
              <Contact key ={contact.id} props={contact} ></Contact>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}
