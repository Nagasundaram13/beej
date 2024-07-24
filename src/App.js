import { Fragment } from 'react';
import './App.css';
import Hero from './pages/Hero';
import Shop from './pages/Shop';
import Hovertxt from './pages/Hovertxt';

function App() {
  return (
    <Fragment>
      <Hero/>
      <Shop/>
      <Hovertxt/>
    </Fragment>
  );
}

export default App;
