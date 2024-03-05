import "./App.css"
import React, { useState } from 'react';

import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Study from "./components/about/About"
import Universities from "./components/allcourses/CourseHome"
import Moving from "./components/pricing/Pricing"
import Scho from "./components/scho/scho"
import After from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Plan from "./components/about/About"
import ContactForm from './backend/ContactForm';
import LoginForm from './backend/LoginForm';
import AdminPage from './backend/AdminPage';
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const handleLoginSuccess = (newToken) => {
    setToken(newToken);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setToken(null);
    setIsLoggedIn(false);
  };





  return (

    <>

<div className="App">
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <AdminPage token={token} />
        </div>
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
      <ContactForm />
    </div>



      <Router>
        <Header />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/why_study_in_uk' component={Study} />
          <Route exact path='/universities' component={Universities} />
          <Route exact path='/schoolerships' component={Scho} />
          <Route exact path='/study_plan' component={Plan} />

          <Route exact path='/moving_to_the_uk' component={Moving} />
          <Route exact path='/after_your_studies' component={After} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
