import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext'; // Ensure you have a context to provide auth state


const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
