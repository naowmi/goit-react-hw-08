import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from '../redux/contacts/operations'
import  ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import Loader from "../components/Loader/Loader";
import PageTitle from "../components/PageTitle/PageTitle";
export default function Contacts() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
      useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
    return (
    <div>
     <PageTitle>Contacts page</PageTitle>
     <ContactForm />
      <SearchBox />
      <PageTitle>Your contacts</PageTitle>
      {loading && <Loader/>}
      <ContactList />
    </div>
    )
}