import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link navbar-brand" href="/">Home</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;