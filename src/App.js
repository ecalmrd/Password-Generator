import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Generator from './pages/Generator';
import Header from './components/Header';



function App() {
  
  return (

      <Router>
        <>
          <Header />
          <Routes>
            <Route
              path='/'
              element={<Generator />}
            />
          </Routes>
        </>
      </Router>
  );
}

export default App;
