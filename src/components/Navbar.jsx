import { useNavigate, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { authTypes } from '../types/authTypes';


const Navbar = () => {

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)

    const handleLogout = () => {

        dispatch({type: authTypes.logout})
        navigate('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <a href="/mans" className='text-decoration-none fw-bold'>
                    <h2 className="navbar-brand">Dragon Ball App</h2>
                </a>
                
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
                        <li className="nav-item me-2">
                            <NavLink
                                className={({isActive}) => `${isActive ? 'fw-bold active text-white text-decoration-none' : "fw-bold text-dark text-decoration-none"}`} 
                                aria-current="page"
                                to="/mans"
                                
                            >
                                Mans
                            </NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink
                                className={({isActive}) => `${isActive ? 'fw-bold active text-white text-decoration-none' : "fw-bold text-dark text-decoration-none"}`} 
                                aria-current="page"
                                to="/womans"
                               
                            >
                                Womans
                            </NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink
                                className={({isActive}) => `${isActive ? 'fw-bold active text-white decoration text-decoration-none' : "fw-bold text-dark text-decoration-none"}`} 
                                aria-current="page"
                                to="/search"
                                
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
