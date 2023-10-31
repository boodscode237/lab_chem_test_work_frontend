import {Outlet} from "react-router-dom";
import Aside from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function BoardLayout() {
    return (
        <div>
            <div className='bg-sky-100'><Aside /></div>
            <div className='bg-sky-200'><Header /></div>
            <div><Outlet/></div>

            <Footer />
        </div>
    )
}