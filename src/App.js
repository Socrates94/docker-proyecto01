import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Detect if we are in development mode (port 3000) or production mode (port 8080)
  // Note: This is a visual approximation for your test
  const isDevMode = window.location.port === '3000';

  return (
    <div className="App">
      <header className="App-header" style={{ 
        backgroundColor: isDevMode ? '#282c34' : '#1a1a1a',
        border: isDevMode ? '5px solid #61dafb' : 'none' 
      }}>
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1 style={{ fontSize: '2rem' }}>
          {isDevMode ? "🚀 DEVELOPMENT MODE (Live Reload ON)" : "🏗️ PRODUCTION MODE (Nginx)"}
        </h1>

        <div style={{ margin: '20px', padding: '20px', background: '#444', borderRadius: '10px' }}>
          <p>You have clicked {count} times</p>
          <button 
            onClick={() => setCount(count + 1)}
            style={{ padding: '10px 20px', fontSize: '1.2rem', cursor: 'pointer' }}
          >
            Click here!
          </button>
        </div>

        <p style={{ maxWidth: '500px' }}>
          {isDevMode 
            ? "If you change this text and save, it will immediately appear on port 3000 due to volume mapping." 
            : "This is the static content served by Nginx."}
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docker Compose works! 🔥
        </a>
      </header>
    </div>
  );
}

export default App;