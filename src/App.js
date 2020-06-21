import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './img/logo.png';
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Slide from './Component/Slide'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Slide></Slide>
      <Footer></Footer>
    </div>

  );
}

export default App;
