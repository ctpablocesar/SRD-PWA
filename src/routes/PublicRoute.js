import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const { uid } = useSelector(state => state.auth);
    return (uid)
        ? <Navigate to="/admin" />
        : children
}

export default PublicRoute