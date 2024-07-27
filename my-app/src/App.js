import React, { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';

function App() {
  const myRef = useRef();

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/pregnant' element={<Blog1 />} />
          <Route path='/infantcare' element={<Blog2 />} />
        </Routes>
      </div>
      <div>
        <h1 ref={myRef}>Hello, World!</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
