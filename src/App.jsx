import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Section1 } from './sections/section1'
import { Section2 } from './sections/Section2'
import { Section3 } from './sections/Section3'
import { Section4 } from './sections/Section4'
import { Section5 } from './sections/Section5'

function App() {
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
        className="hidden md:block bg-[#F3F3F3] rounded-full pointer-events-none fixed z-50"
        style={{
          top: position.y - 5, // centramos el punto
          left: position.x - 5,
          width: 10,
          height: 10,
        }}
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Header />
    </main>
  )
}

export default App
