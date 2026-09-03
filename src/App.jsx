import React, { useState } from 'react'

export default function App() {
  const [page, setPage] = useState('home')
  const [user, setUser] = useState(null)
  const [businessName, setBusinessName] = useState('')
  const [email, setEmail] = useState('')
  const [ideas, setIdeas] = useState([
    { id: 1, title: 'Solar Water Purification', description: 'Low-cost solar water systems', creator: 'EcoTech', funded: 32000, goal: 50000 },
    { id: 2, title: 'Ocean Cleanup', description: 'AI drones for ocean plastic', creator: 'Blue Wave', funded: 75000, goal: 100000 }
  ])

  const handleRegister = (e) => {
    e.preventDefault()
    if (businessName && email) {
      setUser({ name: businessName, email })
      setPage('dashboard')
      setBusinessName('')
      setEmail('')
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e27', color: '#e0e0e0', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <header style={{ background: 'rgba(10, 14, 39, 0.9)', borderBottom: '1px solid #667eea', padding: '16px', position: 'sticky', top: 0 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, color: '#667eea', fontSize: '20px', cursor: 'pointer' }} onClick={() => { setPage('home'); setUser(null) }}>🌍 World Fund</h1>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => setPage('home')} style={{ background: page === 'home' ? '#667eea' : 'transparent', border: 'none', color: '#e0e0e0', padding: '8px 12px', cursor: 'pointer', borderRadius: '4px' }}>Home</button>
            <button onClick={() => setPage('dashboard')} style={{ background: page === 'dashboard' ? '#667eea' : 'transparent', border: 'none', color: '#e0e0e0', padding: '8px 12px', cursor: 'pointer', borderRadius: '4px' }}>Dashboard</button>
          </div>
        </div>
      </header>

      {/* Home Page */}
      {page === 'home' && (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Welcome to World Fund Engine</h2>
            <p style={{ color: '#667eea', marginBottom: '12px' }}>A safe sandbox where businesses connect & grow together</p>
            <p style={{ color: '#b0b0b0', marginBottom: '24px' }}>✨ No fear • 💚 Equal opportunity • 🌊 Shared growth</p>
            
            {!user ? (
              <div style={{ background: 'rgba(102, 126, 234, 0.1)', border: '1px solid #667eea', borderRadius: '8px', padding: '20px', marginBottom: '40px' }}>
                <h3>Register Your Business</h3>
                <form onSubmit={handleRegister}>
                  <input 
                    type="text" 
                    placeholder="Business Name" 
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    style={{ width: '100%', padding: '12px', marginBottom: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid #667eea', borderRadius: '4px', color: '#e0e0e0', boxSizing: 'border-box' }}
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '12px', marginBottom: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid #667eea', borderRadius: '4px', color: '#e0e0e0', boxSizing: 'border-box' }}
                  />
                  <button type="submit" style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                    Join Now
                  </button>
                </form>
              </div>
            ) : (
              <button onClick={() => setPage('dashboard')} style={{ padding: '12px 24px', background: '#667eea', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
                Go to Dashboard
              </button>
            )}
          </div>

          {/* Features */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'rgba(102, 126, 234, 0.1)', padding: '16px', borderRadius: '8px' }}>
              <h4>💡 Post Ideas</h4>
              <p style={{ color: '#b0b0b0', fontSize: '14px' }}>Share innovations freely</p>
            </div>
            <div style={{ background: 'rgba(102, 126, 234, 0.1)', padding: '16px', borderRadius: '8px' }}>
              <h4>🤝 Connect</h4>
              <p style={{ color: '#b0b0b0', fontSize: '14px' }}>Find collaborative partners</p>
            </div>
            <div style={{ background: 'rgba(102, 126, 234, 0.1)', padding: '16px', borderRadius: '8px' }}>
              <h4>💰 Fund Together</h4>
              <p style={{ color: '#b0b0b0', fontSize: '14px' }}>Multiple businesses, one idea</p>
            </div>
            <div style={{ background: 'rgba(102, 126, 234, 0.1)', padding: '16px', borderRadius: '8px' }}>
              <h4>🔒 Transparent</h4>
              <p style={{ color: '#b0b0b0', fontSize: '14px' }}>Complete audit trail</p>
            </div>
          </div>
        </div>
      )}

      {/* Dashboard */}
      {page === 'dashboard' && user && (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <h2>Welcome, {user.name}! 👋</h2>
          
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', overflowX: 'auto' }}>
            <button onClick={() => setPage('marketplace')} style={{ background: '#667eea', border: 'none', color: 'white', padding: '10px 16px', cursor: 'pointer', borderRadius: '4px', whiteSpace: 'nowrap' }}>📈 Marketplace</button>
            <button onClick={() => setPage('submit')} style={{ background: 'rgba(102, 126, 234, 0.3)', border: 'none', color: '#e0e0e0', padding: '10px 16px', cursor: 'pointer', borderRadius: '4px', whiteSpace: 'nowrap' }}>✨ Submit Idea</button>
            <button onClick={() => setPage('audit')} style={{ background: 'rgba(102, 126, 234, 0.3)', border: 'none', color: '#e0e0e0', padding: '10px 16px', cursor: 'pointer', borderRadius: '4px', whiteSpace: 'nowrap' }}>🔒 Audit</button>
          </div>

          {page === 'marketplace' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
              {ideas.map(idea => (
                <div key={idea.id} style={{ background: 'rgba(102, 126, 234, 0.1)', border: '1px solid #667eea', borderRadius: '8px', padding: '16px' }}>
                  <h4>{idea.title}</h4>
                  <p style={{ color: '#667eea', fontSize: '12px', margin: '4px 0' }}>by {idea.creator}</p>
                  <p style={{ color: '#b0b0b0', fontSize: '13px', margin: '8px 0' }}>{idea.description}</p>
                  <div style={{ background: 'rgba(255,255,255,0.05)', height: '6px', borderRadius: '3px', marginBottom: '8px', overflow: 'hidden' }}>
                    <div style={{ background: '#667eea', height: '100%', width: `${(idea.funded / idea.goal) * 100}%` }}></div>
                  </div>
                  <p style={{ fontSize: '12px', color: '#e0e0e0', margin: '0 0 12px 0' }}>${idea.funded.toLocaleString()} / ${idea.goal.toLocaleString()}</p>
                  <button style={{ width: '100%', padding: '10px', background: '#667eea', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Fund This</button>
                </div>
              ))}
            </div>
          )}

          {page === 'submit' && (
            <div style={{ background: 'rgba(102, 126, 234, 0.1)', border: '1px solid #667eea', borderRadius: '8px', padding: '16px' }}>
              <h3>✨ Share Your Idea</h3>
              <form>
                <input type="text" placeholder="Idea Title" style={{ width: '100%', padding: '10px', marginBottom: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid #667eea', borderRadius: '4px', color: '#e0e0e0', boxSizing: 'border-box' }} />
                <textarea placeholder="Description" rows="4" style={{ width: '100%', padding: '10px', marginBottom: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid #667eea', borderRadius: '4px', color: '#e0e0e0', boxSizing: 'border-box' }}></textarea>
                <input type="number" placeholder="Funding Goal ($)" style={{ width: '100%', padding: '10px', marginBottom: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid #667eea', borderRadius: '4px', color: '#e0e0e0', boxSizing: 'border-box' }} />
                <button type="submit" style={{ width: '100%', padding: '12px', background: '#667eea', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Post Idea</button>
              </form>
            </div>
          )}

          {page === 'audit' && (
            <div style={{ background: 'rgba(102, 126, 234, 0.1)', border: '1px solid #667eea', borderRadius: '8px', padding: '16px' }}>
              <h3>📋 Audit Log</h3>
              <p style={{ color: '#b0b0b0', fontSize: '13px', marginBottom: '16px' }}>Complete transparency. Every action logged.</p>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderLeft: '3px solid #667eea', borderRadius: '4px', marginBottom: '12px' }}>
                <p style={{ margin: 0, color: '#667eea', fontSize: '12px', fontWeight: 'bold' }}>09:00 - User Registered</p>
                <p style={{ margin: '4px 0 0 0', color: '#e0e0e0', fontSize: '13px' }}>{user.name}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {page === 'dashboard' && !user && (
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <h2>Please register first</h2>
          <button onClick={() => setPage('home')} style={{ padding: '12px 24px', background: '#667eea', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>Back to Home</button>
        </div>
      )}
    </div>
  )
}
