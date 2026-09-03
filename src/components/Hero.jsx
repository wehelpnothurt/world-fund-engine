import React, { useState } from 'react'
import './Hero.css'

function Hero({ setCurrentPage, setUser }) {
  const [showRegister, setShowRegister] = useState(false)
  const [businessName, setBusinessName] = useState('')
  const [email, setEmail] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    if (businessName && email) {
      const newUser = {
        id: Date.now(),
        name: businessName,
        email: email,
        joinedAt: new Date().toLocaleDateString(),
        ideas: [],
        funding: 0
      }
      setUser(newUser)
      setShowRegister(false)
      setBusinessName('')
      setEmail('')
      setCurrentPage('dashboard')
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Welcome to the World Fund Engine</h2>
            <p className="subtitle">
              A safe sandbox where all businesses connect, collaborate, and grow together.
            </p>
            <p className="description">
              ✨ No fear • 💚 Equal opportunity • 🌊 Shared growth • 🔒 Transparent funding
            </p>
            
            <div className="hero-buttons">
              <button 
                className="primary"
                onClick={() => setShowRegister(!showRegister)}
              >
                {showRegister ? 'Cancel' : 'Register Your Business'}
              </button>
            </div>
          </div>

          {showRegister && (
            <div className="register-form">
              <h3>Register Your Business</h3>
              <form onSubmit={handleRegister}>
                <div className="form-group">
                  <label>Business Name</label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Enter your business name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <button type="submit" className="primary">
                  Join the Engine
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="features">
          <div className="feature-card">
            <h4>💡 Post Ideas</h4>
            <p>Share your innovation with the world. All ideas matter and deserve attention.</p>
          </div>
          <div className="feature-card">
            <h4>🤝 Connect</h4>
            <p>Find businesses with shared values. Collaborate without fear or competition.</p>
          </div>
          <div className="feature-card">
            <h4>💰 Fund Together</h4>
            <p>Multiple businesses can fund one idea. Equal edges, shared returns.</p>
          </div>
          <div className="feature-card">
            <h4>🔒 Safe Sandbox</h4>
            <p>Test, learn, and iterate safely. Full transparency. Complete audit trail.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
