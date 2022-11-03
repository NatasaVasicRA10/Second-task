import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthUserProvider';

const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    user.isLoggedIn ? <Outlet/> : (user.isLoading ? 'Loading...' : <Navigate to='/'/>)
  );
};

export default PrivateRoutes;