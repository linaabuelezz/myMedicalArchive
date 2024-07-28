import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const ConditionalNavbar = () => {
  const location = useLocation();
  const shouldShowNavbar = location.pathname !== '/login' && location.pathname !== '/signup';

  return shouldShowNavbar ? <Navbar /> : null;
};

export default ConditionalNavbar;
