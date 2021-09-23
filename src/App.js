import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import About from './pages.js/About';
import Contact from './pages.js/Contact';
import Home from './pages.js/Home';
import Projects from './pages.js/Projects';
// import HeroSection from './components/HeroSection';

/* to import I install something i don't remember - need to highlight and press 'ctrl' + 'space' */
export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
