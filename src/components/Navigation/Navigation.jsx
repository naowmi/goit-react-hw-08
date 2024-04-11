import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";
const makeActiveLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive)
}
export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav className={css.container}>
            <NavLink className={makeActiveLink} to="/">Home</NavLink>
            {isLoggedIn && (
                <NavLink className={makeActiveLink} to="/contacts">Contacts</NavLink>
            )}
        </nav>
    )
}