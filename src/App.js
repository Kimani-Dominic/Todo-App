import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

import backgroundImage from './images/todoo.jpg';

function App() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Router>
        {/* Improved Navbar */}
        <div className="bg-black text-white fixed w-full top-0 z-10">
          <div className="container mx-auto flex items-center justify-between p-4">
            <Link to="/home" className="text-white font-bold text-2xl">Home</Link><br></br>
            <Link to="/about" className="text-white ml-4">About</Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto mt-20 p-8">
          {/* Routes for Home and About pages */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

          {/* Todo App Landing Page */}
          <div className="text-white text-center mt-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Todo App</h1>
            <p className="text-lg">
              Where you can organize your tasks efficiently. Stay productive!
            </p>
            <p>
        <Link to="./Home">Proceed to Add your Tasks</Link>
      </p>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
