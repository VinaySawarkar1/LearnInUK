import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import './header.css';

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header className="flex items-center">
        <div className="logo mr-auto">
          {/* Add your logo here */}
          <img src="../../../../images/logo2.png" alt="logo" className="logo" />
        </div>
        <nav className="flexSB">
          <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={() => setClick(false)}>
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/why_study_in_uk" className="hover:underline">Why Study in the UK</Link>
            </li>
            <li>
              <Link to="/study_plan" className="hover:underline">Plan Your Studies</Link>
            </li>
            <li>
              <Link to="/schoolerships" className="hover:underline">Scholerships & Fundings</Link>
            </li>
            <li>
              <Link to="/moving_to_the_uk" className="hover:underline">Moving to the UK</Link>
            </li>
            <li>
              <Link to="/after_your_studies" className="hover:underline">After Your Studies</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
