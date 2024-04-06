import './App.css'
import css from "./App.module.css"
import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from '../redux/contactsOps';
export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.contacts.loading)
  const error = useSelector((state) => state.contacts.error)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
<div className={css.container}>
  <h1 className={css.title}>Phonebook</h1>
  <ContactForm />
      <SearchBox />
      {error && <p>Something went wrong!</p> }
      {loading && <p>Loading...</p>}
      <ContactList />
      <ToastContainer/>
</div>
  )
}

