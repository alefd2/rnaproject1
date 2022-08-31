import { SingIn } from './pages/SingIn';

import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './shared/layouts/Layout';


export const App = () => {
  const { pathname } = useLocation();

  const isAuthenticated = false;

  if (pathname != '/login' && !isAuthenticated) {
    return <Navigate to='/login' />;
  }

  if (pathname === '/login' && isAuthenticated) {
    return <Navigate to='/' />;
  }

  return (
    <Routes>
      <Route path='/login' element={<SingIn />} />
      {isAuthenticated && (
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path="*" element={< Navigate to="/login" />} />
        </Route>
      )}
    </Routes >
  )
}
