import { Form, Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
export default function LoginForm() { 
    const dispatch = useDispatch();
    const handleSubmit = (values, action) => {
        dispatch(logIn(values));
        action.resetForm();
    }
    return (
        <Formik
         initialValues={{
                email: "",
                password: "",
            }}  
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <label className={css.label}>
                    Email
                    <Field className={css.field} type="text" name="email" required/>
                </label>
                <label  className={css.label}>
                    Password
                    <Field className={css.field} type="text" name="password" required/>
                </label>
                <button type="submit">Log in</button>
            </Form>
        </Formik>
    )
 }