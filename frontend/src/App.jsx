import reactLogo from './assets/react.svg'

import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {

  return (
    <Routes>
      <Route path="/home" element={<p> Estasmo</p>} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
