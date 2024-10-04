import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar";

const MainLayOut = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;