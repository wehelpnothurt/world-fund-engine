import React, { useState } from 'react'
import './App.css'

// Simple inline components to avoid import issues
function Header({ currentPage, setCurrentPage, user }) {
  return (
    <header style={{background: 'rgba(10, 14, 39, 0.8)', borderBottom: '1px solid rgba(102, 126, 234, 0.2)', padding: '16px 0', position: 'sticky', top: 0, zIndex: 100}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1 style={{margin: 0, cursor: 'pointer', color: '#667eea'}} onClick={() => setCurrentPage('home')}>🌍 World Fund Engine</h1>
        <div style={{display: 'flex', gap: '12px'}}>
          <button onClick={() => setCurrentPage('home')} style={{background: currentPage === 'home' ? 'rgba(102, 126, 234, 0.3)' : 'transparent', border: 'none', color: '#b0b0b0', padding: '8px 16px', cursor: 'pointer'}}>Home</button>
          <button onClick={() => setCurrentPage('dashboard')} style={{background: currentPage === 'dashboard' ? 'rgba(102, 126, 234, 0.3)' : 'transparent', border: 'none', color: '#b0b0b0', padding: '8px 16px', cursor: 'pointer'}}>Dashboard</button>
        </div>
        <div style={{color: '#b0b0b0', fontSize: '14px'}}>
          {user ? `Welcome, ${user.name}` : 'Not registered'}
        </div>
      </div>
    </header>
  )
}

function Hero({ setCurrentPage, setUser }) {
  const [showRegister, setShowRegister] = useState(false)
  const [businessName, setBusinessName] = useState('')
  const [email, setEmail] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    if (businessName && email) {
      setUser({ id: Date.now(), name: businessName, email })
      setCurrentPage('dashboard')
      setShowRegister(false)
      setBusinessName('')
      setEmail('')
    }
  }

  return (
    <section style={{padding: '60px 0'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', marginBottom: '80px'}}>
          <div>
            <h2 style={{fontSize: '48px', marginBottom: '24px'}}>Welcome to the World Fund Engine</h2>
            <p style={{fontSize: '18px', color: '#667eea', marginBottom: '16px'}}>A safe sandbox where all businesses connect, collaborate, and grow together.</p>
            <p style={{fontSize: '16px', color: '#b0b0b0', marginBottom: '32px'}}>✨ No fear • 💚 Equal opportunity • 🌊 Shared growth • 🔒 Transparent funding</p>
            <button onClick={() => setShowRegister(!showRegister)} style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600}}>
              {showRegister ? 'Cancel' : 'Register Your Business'}
            </button>
          </div>

          {showRegister && (
            <div style={{background: 'rgba(102, 126, 234, 0.1)', border: '1px solid rgba(102, 126, 234, 0.3)', borderRadius: '8px', padding: '32px'}}>
              <h3>Register Your Business</h3>
              <form onSubmit={handleRegister}>
                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '8px', color: '#e0e0e0', fontWeight: 500}}>Business Name</label>
                  <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Enter your business name" required style={{width: '100%', padding: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(102, 126, 234, 0.3)', borderRadius: '4px', color: '#e0e0e0'}} />
                </div>
                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '8px', color: '#e0e0e0', fontWeight: 500}}>Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required style={{width: '100%', padding: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(102, 126, 234, 0.3)', borderRadius: '4px', color: '#e0e0e0'}} />
                </div>
                <button type="submit" style={{width: '100%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600}}>Join the Engine</button>
              </form>
            </div>
          )}
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px'}}>
          <div style={{background: 'rgba(102, 126, 234, 0.08)', border: '1px solid rgba(102, 126, 234, 0.2)', borderRadius: '8px', padding: '24px'}}>
            <h4>💡 Post Ideas</h4>
            <p style={{color: '#b0b0b0', margin: 0}}>Share your innovation with the world. All ideas matter.</p>
          </div>
          <div style={{background: 'rgba(102, 126, 234, 0.08)', border: '1px solid rgba(102, 126, 234, 0.2)', borderRadius: '8px', padding: '24px'}}>
            <h4>🤝 Connect</h4>
            <p style={{color: '#b0b0b0', margin: 0}}>Find businesses with shared values. Collaborate without fear.</p>
          </div>
          <div style={{background: 'rgba(102, 126, 234, 0.08)', border: '1px solid rgba(102, 126, 234, 0.2)', borderRadius: '8px', padding: '24px'}}>
            <h4>💰 Fund Together</h4>
            <p style={{color: '#b0b0b0', margin: 0}}>Multiple businesses fund one idea. Equal power, shared returns.</p>
          </div>
          <div style={{background: 'rgba(102, 126, 234, 0.08)', border: '1px solid rgba(102, 126, 234, 0.2)', borderRadius: '8px', padding: '24px'}}>
            <h4>🔒 Safe Sandbox</h4>
            <p style={{color: '#b0b0b0', margin: 0}}>Test safely. Full transparency. Complete audit trail.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Dashboard({ user }) {
  const [ideas, setIdeas] = useState([
    { id: 1, title: 'Solar Water Purification', description: 'Low-cost solar water systems for rural communities', creator: 'EcoTech', fundingGoal: 50000, fundingRaised: 32000, backers: 5 },
    { id: 2, title: 'Ocean Cleanup Initiative', description: 'AI-powered drones for ocean plastic collection', creator: 'Blue Wave', fundingGoal: 100000, fundingRaised: 75000, backers: 8 }
  ])
  const [view, setView] = useState('marketplace')

  return (
    <div style={{padding: '40px 0', minHeight: 'calc(100vh - 60px)'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        <h2>Dashboard - Welcome, {user.name}</h2>
        
        <div style={{display: 'flex', gap: '12px', marginBottom: '32px', borderBottom: '1px solid rgba(102, 126, 234, 0.2)', paddingBottom: '16px'}}>
          <button onClick={() => setView('marketplace')} style={{background: view === 'marketplace' ? 'rgba(102, 126, 234, 0.3)' : 'transparent', border: 'none', color: '#b0b0b0', padding: '12px 20px', cursor: 'pointer'}}>📈 Marketplace</button>
          <button onClick={() => setView('submit')} style={{background: view === 'submit' ? 'rgba(102, 126, 234, 0.3)' : 'transparent', border: 'none', color: '#b0b0b0', padding: '12px 20px', cursor: 'pointer'}}>✨ Submit Idea</button>
          <button onClick={() => setView('audit')} style={{background: view === 'audit' ? 'rgba(102, 126, 234, 0.3)' : 'transparent', border: 'none', color: '#b0b0b0', padding: '12px 20px', cursor: 'pointer'}}>🔒 Audit Log</button>
        </div>

        {view === 'marketplace' && (
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px'}}>
            {ideas.map(idea => (
              <div key={idea.id} style={{background: 'rgba(102, 126, 234, 0.08)', border: '1px solid rgba(102, 126, 234, 0.2)', borderRadius: '8px', padding: '24px'}}>
                <h4>{idea.title}</h4>
                <p style={{color: '#667eea', fontSize: '13px'}}>by {idea.creator}</p>
                <p style={{color: '#b0b0b0', fontSize: '14px'}}>{idea.description}</p>
                <div style={{marginTop: '20px', marginBottom: '20px'}}>
                  <div style={{background: 'rgba(255, 255, 255, 0.05)', height: '8px', borderRadius: '4px', overflow: 'hidden', marginBottom: '12px'}}>
                    <div style={{background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', height: '100%', width: `${(idea.fundingRaised / idea.fundingGoal) * 100}%`}}></div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '13px'}}>
                    <span style={{color: '#e0e0e0'}}>${idea.fundingRaised.toLocaleString()} / ${idea.fundingGoal.toLocaleString()}</span>
                    <span style={{color: '#667eea'}}>{Math.round((idea.fundingRaised / idea.fundingGoal) * 100)}%</span>
                  </div>
                </div>
                <button style={{width: '100%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600}}>Fund This Idea</button>
              </div>
            ))}
          </div>
        )}

        {view === 'submit' && (
          <div style={{background: 'rgba(102, 126, 234, 0.08)', border: '1px solid rgba(102, 126, 234, 0.2)', borderRadius: '8px', padding: '32px'}}>
            <h3>✨ Share Your Idea</h3>
            <form>
              <div style={{marginBottom: '24px'}}>
                <label style={{display: 'block', marginBottom: '8px', color: '#e0e0e0', fontWeight: 500}}>Idea Title</label>
                <input type="text" placeholder="Give your idea a compelling title" style={{width: '100%', padding: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(102, 126, 234, 0.3)', borderRadius: '4px', color: '#e0e0e0'}} />
              </div>
              <div style={{marginBottom: '24px'}}>
                <label style={{display: 'block', marginBottom: '8px', color: '#e0e0e0', fontWeight: 500}}>Description</label>
                <textarea placeholder="Describe your idea..." rows="6" style={{width: '100%', padding: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(102, 126, 234, 0.3)', borderRadius: '4px', color: '#e0e0e0'}}></textarea>
              </div>
              <div style={{marginBottom: '24px'}}>
                <label style={{display: 'block', marginBottom: '8px', color: '#e0e0e0', fontWeight: 500}}>Funding Goal ($)</label>
                <input type="number" placeholder="How much do you need?" min="1000" step="1000" style={{width: '100%', padding: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(102, 126, 234, 0.3)', borderRadius: '4px', color: '#e0e0e0'}} />
              </div>
              <button type="submit" style={{width: '100%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600}}>Post Idea</button>
            </form>
          </div>
        )}

        {view === 'audit' && (
          <div style={{background: 'rgba(102, 126, 234, 0.08)', border: '1px solid rgba(102, 126, 234, 0.2)', borderRadius: '8px', padding: '32px'}}>
            <h3>📋 Audit Log - Complete Transparency</h3>
            <p style={{color: '#b0b0b0', marginBottom: '24px', fontSize: '14px'}}>Every action is logged. No hidden decisions.</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <div style={{display: 'grid', gridTemplateColumns: '180px 1fr auto', gap: '16px', padding: '12px', background: 'rgba(255, 255, 255, 0.02)', borderLeft: '2px solid #667eea', borderRadius: '4px', fontSize: '13px'}}>
                <span style={{color: '#667eea', fontWeight: 500}}>2026-09-03 10:00</span>
                <span style={{color: '#e0e0e0'}}>User registered</span>
                <span style={{color: '#b0b0b0'}}>{user.name}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [user, setUser] = useState(null)

  return (
    <div style={{minHeight: '100vh', background: 'linear-gradient(135deg, #0a0e27 0%, #16213e 100%)'}}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} user={user} />
      
      {currentPage === 'home' && <Hero setCurrentPage={setCurrentPage} setUser={setUser} />}
      {currentPage === 'dashboard' && user ? <Dashboard user={user} /> : currentPage === 'dashboard' && <div style={{textAlign: 'center', padding: '40px'}}><button onClick={() => setCurrentPage('home')} style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Register First</button></div>}
    </div>
  )
}

export default App
