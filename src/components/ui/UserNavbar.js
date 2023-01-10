import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';


const UserNavbar = ({ handleSidebar }) => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle js-sidebar-toggle" onClick={handleSidebar}>
                <i className="hamburger align-self-center"></i>
            </a>

            <div className="navbar-collapse collapse mr-4">
                <ul className="navbar-nav navbar-align ">


                    <li className="nav-item dropdown">
                        <button onClick={handleLogout} className="dropdown-item" href="/login">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit align-middle me-1">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>{" "}
                            Cerrar sesión
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default UserNavbar
