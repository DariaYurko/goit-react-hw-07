import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Loader from './components/Loader/Loader';
import './App.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetAllContatcs, selectLoader } from './redux/contactsSlice';

const App = () => {
  //-------------------------------------- /
  const dispatch = useDispatch();

  // задіспатчили санку після рендеру сторінки
  useEffect(() => {
    dispatch(apiGetAllContatcs());
  }, [dispatch]);

  
  const isLoading = useSelector(selectLoader);
  //-------------------------------------- /

  return (
    <>
      <h1>Phonebook</h1>
      {isLoading && <Loader />}

      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default App;
