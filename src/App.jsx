import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadLineComponent from './components/HeadLine/HeadLineComponent';
import Food from './components/TopRatedMenu/Food';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineComponent />
      <Food />
    </div>
  )
}

export default App