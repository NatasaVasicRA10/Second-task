import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthUserProvider';

const PrivateRoutes = () => {
  const { user } = useAuth();

  return (
    user.userData ? <Outlet/> : <Navigate to='/'/>
  );
};

export default PrivateRoutes;