import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Growth from './pages/Growth';
import Standards from './pages/Standards';
import Cases from './pages/Cases';
import Join from './pages/Join';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="growth" element={<Growth />} />
          <Route path="standards" element={<Standards />} />
          <Route path="cases" element={<Cases />} />
          <Route path="join" element={<Join />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;