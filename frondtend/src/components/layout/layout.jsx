import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout(){
    return(
        <div className="flex min-h-screen flex-col">
            <a
            href="#contenido"
            className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:roundede focus:bg-maiz focus:px-4 focus:py-2 focus:font-bold">
                Saltar al contenido
            </a>
            <ScrollToTop />
            <Header />
            <main id="contenido" className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}