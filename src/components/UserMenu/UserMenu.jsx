import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOutUser } from "../../redux/auth/operations";
import css from "./UserName.module.css";
export default function UserMenu() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    return (
        <div className={css.container}>
            <h2>Welcome, {user.name}</h2>
            <button className={css.button} type="button" onClick={() => dispatch(logOutUser())}> Logout </button>
        </div>
    )
}