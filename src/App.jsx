import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <div className='contMain'>

      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Body/>}></Route>

          <Route exact path='/about' element={<About/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
