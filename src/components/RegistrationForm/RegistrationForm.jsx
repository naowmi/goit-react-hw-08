import { Form, Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
export default function RegistrationForm() {
    const dispatch = useDispatch()
    const handleSubmit = (values, action) => {
        dispatch(registerUser(values));
        action.resetForm();
    }
    return (
        <Formik
        initialValues={{
                name: "",
                email: "",
                password: "",
            }}  
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <label className={css.label}>
                    Username
                    <Field className={css.field}  type="text" name="name" required />
                </label>
                <label className={css.label}>
                    Email
                    <Field className={css.field} type="text" name="email" required/>
                </label>
                <label className={css.label}>
                    Password
                    <Field className={css.field} type="text" name="password" required/>
                </label>
                <button type="submit">Register</button>
            </Form>    
    </Formik>
)
}