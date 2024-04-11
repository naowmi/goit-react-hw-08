import PageTitle from "../components/PageTitle/PageTitle";
import LoginForm from "../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <div>
            <PageTitle>Log in page</PageTitle>
            <LoginForm />
            <p>
             <Link to="/register">register an account</Link>   
            </p>
    </div>
)
}