import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [scale, setscale] = useState(false)
  const [isMouseConnected, setIsMouseConnected] = useState(true);
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

  function handleMouseMove(e) {
    var pointer = document.getElementById("crclebx"),
      pointerBox = pointer.getBoundingClientRect(),
      centerPoint = window.getComputedStyle(pointer).transformOrigin,
      centers = centerPoint.split(" "),
      centerY = pointerBox.top + parseInt(centers[1]) - window.pageYOffset,
      centerX = pointerBox.left + parseInt(centers[0]) - window.pageXOffset;
    var radians = Math.atan2(e.clientX - centerX, e.clientY - centerY)
    var degree = (radians * (180 / Math.PI) * -1) + 180;
    pointer.style.transform = "rotate(" + degree + "deg)";
    if (scale) {
      pointer.style.transform = "rotate(" + degree + "deg) scale(1.1)";
    }
    else {
      pointer.style.transform = "rotate(" + degree + "deg) scale(1)";
    }
  }
  window.addEventListener("mousemove", handleMouseMove);

  return (
    <div className="App">
      {/* Custom Cursor */}
      <div className="custom-cursor"></div>
      <div className="main-title">
        Auxlang
      </div>
      <div className='emailbox'>
        <a href='mailto:hello@auxlang.io'
          className="email hover-scale"
        >
          <p>
            <span>
              hello@auxlang.io
            </span>
          </p>
          <p>
            <span>
              hello@auxlang.io
            </span>
          </p>
          <p>
            <span>
              hello@auxlang.io
            </span>
          </p>
          <p>
            <span>
              hello@auxlang.io
            </span>
          </p>
        </a>
      </div>
      <a href='mailto:hello@auxlang.io' className='circlebox' id='crclebx' onMouseOver={() => { setscale(true) }} onMouseOut={() => { setscale(false) }}>
        <img src="./images/get_in_touch.svg" className='get_text' />
        <img src="./images/music_icon.svg" className='music-icon' />
      </a>

      {/* Conditionally render the about link */}
      {
        !isPopupVisible && (
          <div className="about hover-scale"
            onClick={() => setPopupVisible(true)}
          >
            about
          </div>
        )
      }

      {/* The popup */}
      <div className={`footer-popup ${isPopupVisible ? 'active' : ''}`}>
        <div className="close-popup" onClick={() => setPopupVisible(false)}>X</div>
        <p><b>Auxlang</b> is a modern music investment fund specializing in providing independent artists non-traditional catalogue deals, in order for them to retain future earnings, avoid the pitfalls of recoupment, and elevate their careers while maintaining independence for future releases.</p>
      </div>
    </div >
  );
}

export default App;
