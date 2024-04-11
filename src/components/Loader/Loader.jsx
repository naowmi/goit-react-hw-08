import css from "./Loader.module.css";
import { MutatingDots } from 'react-loader-spinner'
export default function Loader() {
    return (
        <div className={css.loader}>
            <MutatingDots color='#d19064'
                secondaryColor='#d19064'
                wrapperClass="loader"
            />
        </div>
    );
}
