import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Dashboard from './pages/Dashboard'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [user, setUser] = useState(null)

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} user={user} />
      
      {currentPage === 'home' && (
        <>
          <Hero setCurrentPage={setCurrentPage} setUser={setUser} />
        </>
      )}
      
      {currentPage === 'dashboard' && user && (
        <Dashboard user={user} />
      )}
      
      {currentPage === 'dashboard' && !user && (
        <div className="container" style={{ padding: '40px 0', textAlign: 'center' }}>
          <h2>Please register or login first</h2>
          <button className="primary" onClick={() => setCurrentPage('home')}>
            Back to Home
          </button>
        </div>
      )}
    </div>
  )
}

export default App
