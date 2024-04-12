import { Link } from "react-router-dom";
import css from "./NotFound.module.css";
export default function NotFoundPage() {
    return (
       <div>
            <Link to="/" className={css.link}>Back to home page!</Link>
            <b className={css.info}>Opps! Not Found!</b>
        </div>
      
    )
}