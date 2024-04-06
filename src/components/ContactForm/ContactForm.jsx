
import css from "./ContactForm.module.css"
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contactsOps";
 import { toast } from 'react-toastify';
const contactSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
    })
const initialValues = {
    name: "",
    number: ""
}
export const ContactForm = () => {
    const nameField = useId();
    const numberField = useId();
    const dispatch = useDispatch();
    const selectContact = useSelector(selectContacts);

    const handleSubmit = (values, actions) => { 
        if (selectContact.find((contact) =>  contact.number === values.number)) {
            actions.resetForm()
            return toast(`This number ${values.number} is already exist`)
            
            
        }
      dispatch(addContact(values));
       actions.resetForm()
        
       
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={contactSchema}
        >
    <Form className={css.container}>
                <label htmlFor={nameField} className={css.label}>Name</label>
                <Field type="text" name='name' id={nameField} className={css.input} ></Field>
                <ErrorMessage name="name" as="span" /> 
                <label htmlFor={numberField} className={css.label}>Number</label>
                <Field type="text" name='number' pattern="\d{3}-\d{3}-\d{4}" placeholder="xxx-xxx-xxxx" id={numberField} className={css.input}></Field>
                <ErrorMessage name="number" as="span" /> 
                <button type="submit">Add contact</button>
    </Form>       
  </Formik>
    )
}