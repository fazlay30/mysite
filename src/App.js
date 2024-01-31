import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import InvestorLogin from './components/investor-login';
import EntreLogin from './components/entre-login';
import InvestorSignUp from './components/investor-signup';
import EntreSignUp from './components/entre-signup';

function App() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/investor-login" element={<InvestorLogin />} />
            <Route path="/entre-login" element={<EntreLogin />} />
            <Route path="/investor-signup" element={<InvestorSignUp />} />
            <Route path="/entre-signup" element={<EntreSignUp />} />
        </Routes>
      </Router>
    );
}

export default App;