import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import Login from './Components/login';
import Signup from './Components/signup';  // Import your AnotherPage component
import { NewSignup } from './Components/NewSignup';

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/"  element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
