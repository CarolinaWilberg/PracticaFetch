import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({ user, switchLogin, path, children }) => {
    if(user){
        if(switchLogin){
            return <Navigate to={path} replace />
        } else {
            return children;
        }
    } else {
        if(switchLogin){
            return children;
        } else {
            return <Navigate to={path} replace />
        }
    }
};
