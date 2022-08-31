import { SingIn } from './pages/SingIn';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';


export const App = () => {

  return (
    <Routes>
      <Route path='/login' element={<SingIn />} />
      <Route path='/home' element={<Home />} />
      <Route path="*" element={< Navigate to="/login" />} />
    </Routes >
  )
}
