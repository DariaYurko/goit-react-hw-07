import Contact from '../Contact/Contact';
import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice.js'
// import { selectContacts } from '../../redux/contactsSlice.js'
// import {selectNameFilter} from '../../redux/filtersSlice.js'


const ContsctList = () => {
  //Підписалися на state  зі Store
  // const contacts = useSelector(selectContacts);
  // const filtredContactValue = useSelector(selectNameFilter);

  // const filtredContacts = contacts.filter(contact => {
  //   return contact.name
  //     .toLowerCase()
  //     .includes(filtredContactValue.toLowerCase());
  // });

  const filtredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filtredContacts.map(contact => {
        return (
          <li key={contact.id} className={css.contact}>
            <Contact
              name={contact.name}
              phone={contact.number}
              contactId={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContsctList;
