import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;