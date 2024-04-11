import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./AppBar.module.css"
import Navigation from "../Navigation/Navigation";
import  UserMenu  from "../UserMenu/UserMenu";
import  AuthNav  from "../AuthNav/AuthNav";
export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);

    return (
        <header className={css.container}>
        <Navigation />
        {!isRefreshing && <div>{isLoggedIn ? <UserMenu /> : <AuthNav /> }</div>} 
        </header>
    );
}