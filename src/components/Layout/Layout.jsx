import { Suspense } from "react";
import { Outlet } from "react-router-dom"
import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <>
         <Header/>
          <Suspense>
            <Outlet/>
          </Suspense>
        {/* <Footer/> */}
        </>
    )
}

export default Layout;