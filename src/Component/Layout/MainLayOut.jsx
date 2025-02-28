import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar";
import HeadNavbar from "../Share/HeadNavbar";
import Footer from "../Share/Footer";

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

           <div>
            <Footer/>
           </div>

        </div>
    );
};

export default MainLayOut;