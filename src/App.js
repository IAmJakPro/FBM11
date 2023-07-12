import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const text = "GET IN TOUCH! • ".repeat(3);
  const radius = 120; // Adjust this to match the circle's radius

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
    });

    document.querySelectorAll('.hover-scale').forEach(elem => {
      elem.addEventListener('mouseenter', () => {
        cursor.classList.add('hover-effect');
      });
      elem.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover-effect');
      });
    });
  }, []);

  return (
    <div className="App">
      {/* Custom Cursor */}
      <div className="custom-cursor"></div>
      <div className="main-title">
        Auxlang
      </div>
      <div
        className="email hover-scale"
      >
        hello@auxlang.io
      </div>
      {/* Conditionally render the circle */}
      {!isPopupVisible && (
        <div className="circle">
          <div className="rotating-text-container">
            {text.split("").map((letter, index, array) => {
              const theta = (index * 360) / array.length;
              const y = radius * Math.sin((theta * Math.PI) / 180);
              const x = radius * Math.cos((theta * Math.PI) / 180);
              return (
                <div
                  className="rotating-text"
                  style={{
                    transform: `translate(${x - 9.5}px, ${y - 9.5}px) rotate(${theta + 90}deg)`,
                  }}
                  key={index}
                >
                  {letter}
                </div>
              );
            })}
          </div>
          <div className="music-note">&#9835;</div>
        </div>
      )}

      {/* Conditionally render the about link */}
      {!isPopupVisible && (
        <div className="about hover-scale"
          onClick={() => setPopupVisible(true)}
        >
          about
        </div>
      )}

      {/* The popup */}
      <div className={`footer-popup ${isPopupVisible ? 'active' : ''}`}>
        <div className="close-popup" onClick={() => setPopupVisible(false)}>X</div>
        <p><b>Auxlang</b> is a modern music investment fund specializing in providing independent artists non-traditional catalogue deals, in order for them to retain future earnings, avoid the pitfalls of recoupment, and elevate their careers while maintaining independence for future releases.</p>
      </div>
    </div>
  );
}

export default App;
