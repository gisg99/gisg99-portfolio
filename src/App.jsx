import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Section1 } from './sections/section1'

function App() {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <main>
      <div
        className="bg-white rounded-full pointer-events-none fixed z-50"
        style={{
          top: position.y - 5, // centramos el punto
          left: position.x - 5,
          width: 10,
          height: 10,
        }}
      />
      <Section1 />
      <Header />
    </main>
  )
}

export default App
