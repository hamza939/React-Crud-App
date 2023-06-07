import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation   } from 'react-router-dom';
import Login from './Components/Login.tsx';
import Signup from './Components/Signup.tsx';
import DataDetails from './Components/DataDetails.tsx';
import DataForm from './Components/DataForm.tsx';
import DataList from './Components/DataList.tsx';


const App = () => {
  return (
    <Router>
    <div className='h-100'>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/DataDetails" element={<DataDetails />} />
        <Route path="/DataForm" element={<DataForm />} />
        <Route path="/DataList" element={<DataList />} />
      </Routes>
    </div>
  </Router>
);
};

const Header = () => {
const location = useLocation();

return (
  <header className="header">
      <div className="logo">
        {/* <img src="dummy-logo.png" alt="Logo" /> */}
        <h4 className='m-0'>My Logo</h4> {/* If you want to use text instead of an image */}
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/signup' ? 'active' : ''}`}>
            <Link to="/signup" className="nav-link">Signup</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/DataDetails' ? 'active' : ''}`}>
            <Link to="/DataDetails" className="nav-link">DataDetails</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/DataForm' ? 'active' : ''}`}>
            <Link to="/DataForm" className="nav-link">DataForm</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/DataList' ? 'active' : ''}`}>
            <Link to="/DataList" className="nav-link">DataList</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default App;
