import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Loader from './components/Loader/Loader';
// import Error from './components/Error/Error';
import './App.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectLoader} from './redux/contactsSlice';
import { fetchContacts } from './redux/contactsOps';

const App = () => {
  //-------------------------------------- /
  const dispatch = useDispatch();

  // задіспатчили санку після рендеру сторінки
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Підписалися на state  зі Store
  const isLoading = useSelector(selectLoader);
 
  //-------------------------------------- /

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}

      <ContactList />

    </>
  );
};

export default App;
