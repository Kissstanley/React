import {Outlet} from "react-router-dom";
import {Comments} from "../../components";
import styles from './CommentsPage.module.css'
export const CommentsPage = () => {
    return (
        <div className={styles.CommentsPage}>
            <Comments/>
            <Outlet/>
        </div>
    );
};