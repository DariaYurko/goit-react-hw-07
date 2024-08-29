import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiGetAllContatcs } from './redux/contactsSlice';

const App = () => {
  //-------------------------------------- /
  const dispatch = useDispatch();
  // задіспатчили санку після рендеру сторінки
  useEffect(() => {
    dispatch(apiGetAllContatcs());
  }, [dispatch]);
  //-------------------------------------- /

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default App;
