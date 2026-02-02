import React from 'react';
import './index.css';
import Homepage from './routes/Homepage';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/project' element={<About/>}></Route>
        <Route path='/about' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </>
  );
}

export default App;
