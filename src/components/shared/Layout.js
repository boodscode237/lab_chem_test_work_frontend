import {Outlet} from "react-router-dom";
import Aside from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div>
            <div><Outlet/></div>

            <Footer />
        </div>
    )
}