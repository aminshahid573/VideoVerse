import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx"
import Page from "./pages/Demo.jsx";
function Layout(){
    return(
        <div className="h-screen overflow-y-auto w-[-webkit-fill-available] ">
        <Outlet />
        </div>
    )

    
}

export default Layout