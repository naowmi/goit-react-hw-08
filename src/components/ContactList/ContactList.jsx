import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";


export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
      return (
          <ul className={css.container}>
              {contacts.length === 0 && <p>There is no contacts!</p>}
              {contacts.map((contact) => {
                  return <li key={contact.id} className={css.box}>
                      <Contact contact={contact}/>
                  </li>
              })}          
        </ul>
    )
}