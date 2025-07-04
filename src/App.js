import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Main from './Pages/Main';
import Result from './Pages/Result';
function App() {
  return (
    <Router>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path='/result' element={<Result/>} />
      </Routes>
    </Router>
  );
}

export default App;
