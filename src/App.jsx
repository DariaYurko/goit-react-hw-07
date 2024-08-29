import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Loader from './components/Loader/Loader';
import Error from './components/Error/Error';
import './App.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectLoader, selectError } from './redux/contactsSlice';
import { fetchContacts } from './redux/contactsOps';

const App = () => {
  //-------------------------------------- /
  const dispatch = useDispatch();

  // задіспатчили санку після рендеру сторінки
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Підписалися на state  зі Store
  // const isLoading = true;
  const isLoading = useSelector(selectLoader);
  // const error = useSelector(selectError);
  //-------------------------------------- /

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}

      <ContactList />

      {/* {error && <Error />} */}
    </>
  );
};

export default App;
