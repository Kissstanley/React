import {Outlet} from "react-router-dom";
import {Header} from "../Components";
const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;