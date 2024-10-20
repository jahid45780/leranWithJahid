import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar";
import HeadNavbar from "../Share/HeadNavbar";

const MainLayOut = () => {
    return (
        <div>

             <div>
             <HeadNavbar/>
             </div>

            <div>
                <Navbar/>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;