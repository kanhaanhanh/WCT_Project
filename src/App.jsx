// src/App.jsx
import React from 'react';
import AppNavbar from './components/Navbar';
import AppUserNavbar from './components/User-Navbar';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import CategoriesDropdown from './components/Categories-dropdown';

function App() {
  return (
    <div>
      {/* <AppUserNavbar /> */}
      {/* <AppUserNavbar /> */}
      {/* <Login/> */}
      <SignUp/>
      {/* <CategoriesDropdown/> */}
      {/* Your other components go here */}
    </div>
  );
}

export default App;
