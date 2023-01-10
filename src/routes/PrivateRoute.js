import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { uid } = useSelector(state => state.auth);
    const { pathname, search } = useLocation();
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
    return (uid)
        ? children
        : <Navigate to="/" />
}

export default PrivateRoute