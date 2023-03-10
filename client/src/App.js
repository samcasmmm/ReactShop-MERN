import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
