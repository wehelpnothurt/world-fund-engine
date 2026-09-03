import React from 'react'
import './Header.css'

function Header({ currentPage, setCurrentPage, user }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1 onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer', margin: 0 }}>
              🌍 World Fund Engine
            </h1>
          </div>
          
          <nav className="nav">
            <button 
              className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
            <button 
              className={`nav-btn ${currentPage === 'dashboard' ? 'active' : ''}`}
              onClick={() => setCurrentPage('dashboard')}
            >
              Dashboard
            </button>
          </nav>
          
          <div className="user-info">
            {user ? (
              <span className="welcome">Welcome, {user.name}</span>
            ) : (
              <span className="welcome">Not registered</span>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
