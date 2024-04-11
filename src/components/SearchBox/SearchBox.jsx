import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";
export default function SearchBox() {
    const filterValue = useSelector(selectNameFilter)
    const dispatch = useDispatch();
 
    const handleFilter = e => {
        dispatch(changeFilter(e.target.value))
    }
    return (
        <div className={css.box}>
            <p className={css.p}>Find contacts by name</p>
            <input type="text" value={filterValue} onChange={handleFilter} className={css.input} />
        </div>
    )
}