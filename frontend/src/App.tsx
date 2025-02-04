import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Career from './pages/Career';
import Courses from './pages/Courses';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <nav>
            <ul className="nav-list">
              <li><Link to="/">Sobre Mim</Link></li>
              <li><Link to="/career">Carreira</Link></li>
              <li><Link to="/courses">Cursos</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
        <footer>
          <p>
            <marquee behavior="scroll" direction="left">
              Bem-vindo ao meu portfolio - Estilo 1999!
            </marquee>
          </p>
          <p>Portfolio &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
