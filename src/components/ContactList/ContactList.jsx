import Contact from '../Contact/Contact';
import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilteredContacts } from '../../redux/contactsSlice.js'
import {selectNameFilter} from '../../redux/filtersSlice.js'


const ContsctList = () => {
  // Підписалися на state  зі Store
  const contacts = useSelector(selectContacts);
  const filtredContactValue = useSelector(selectNameFilter);

  const filtredContactList = contacts.filter(contact => {
    return contact.name
      .toLowerCase()
      .includes(filtredContactValue.toLowerCase());
  });

  return (
    <ul className={css.contactList}>
      {filtredContactList.map(contact => {
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
