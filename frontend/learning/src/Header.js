import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-light">

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-black" to="/profile">
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-black" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-black" to="/add-user">Create Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;
