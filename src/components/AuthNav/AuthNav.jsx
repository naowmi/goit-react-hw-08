import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";
const makeActiveLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive)
}
export default function AuthNav() {
    return (
        <div className={css.container}>
            <NavLink className={makeActiveLink} to="/register">Register</NavLink>
            <NavLink className={makeActiveLink} to="/login">Log In</NavLink>
        </div>
    );
}