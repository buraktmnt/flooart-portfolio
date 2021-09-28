import React from 'react';
import ImageGrid from './components/ImageGrid';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import Mail from './components/Mail';
import ScrollTopButton from './components/ScrollTopButton';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <div className='container grid grid-flow-row min-w-full sm:mx-0 sm:gap-x-8  sm:grid-flow-col   sm:grid-cols-custom_md  lg:grid-cols-custom_lg   '>
          <Sidebar />
          <Switch>
            <Route exact path='/'>
              <ImageGrid />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/mail'>
              <Mail />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </div>
        <ScrollTopButton />
        <Footer />
      </>
    </Router>
  );
}

export default App;
