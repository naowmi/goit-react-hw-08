import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
export const SearchBox = () => {
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