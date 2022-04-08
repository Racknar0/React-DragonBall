import { useHistory, NavLink } from 'react-router-dom';


const Navbar = () => {

    const history = useHistory()

    const handleLogout = () => {
        history.replace('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <h2 className="navbar-brand">Dragon Ball App</h2>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/mans"
                                activeClassName="active text-white"
                            >
                                Mans
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/womans"
                                activeClassName="active text-white"
                            >
                                Womans
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/search"
                                activeClassName="active text-white"
                            >
                                Search
                            </NavLink>
                        </li>
                    </ul>
                    <div className='d-flex'>
                        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
