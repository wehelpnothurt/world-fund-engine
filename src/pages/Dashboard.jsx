import React, { useState } from 'react'
import './Dashboard.css'
import IdeaForm from '../components/IdeaForm'
import IdeaMarketplace from '../components/IdeaMarketplace'

function Dashboard({ user }) {
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      title: 'Solar Water Purification',
      description: 'Low-cost solar-powered water purification systems for rural communities',
      creator: 'EcoTech Solutions',
      fundingGoal: 50000,
      fundingRaised: 32000,
      backers: 5,
      createdAt: '2026-08-25'
    },
    {
      id: 2,
      title: 'Ocean Cleanup Initiative',
      description: 'AI-powered drone systems to collect and process ocean plastic',
      creator: 'Blue Wave Innovations',
      fundingGoal: 100000,
      fundingRaised: 75000,
      backers: 8,
      createdAt: '2026-08-22'
    }
  ])
  
  const [view, setView] = useState('marketplace')
  const [auditLog, setAuditLog] = useState([
    { timestamp: '2026-09-03 10:00', action: 'Dashboard loaded', user: user.name }
  ])

  const handleAddIdea = (newIdea) => {
    const idea = {
      id: Date.now(),
      ...newIdea,
      creator: user.name,
      fundingRaised: 0,
      backers: 0,
      createdAt: new Date().toLocaleDateString()
    }
    setIdeas([idea, ...ideas])
    setAuditLog([
      ...auditLog,
      { 
        timestamp: new Date().toLocaleString(), 
        action: `New idea posted: "${idea.title}"`, 
        user: user.name 
      }
    ])
    setView('marketplace')
  }

  const handleFundIdea = (ideaId, amount) => {
    setIdeas(ideas.map(idea => 
      idea.id === ideaId 
        ? { 
            ...idea, 
            fundingRaised: idea.fundingRaised + amount, 
            backers: idea.backers + 1 
          }
        : idea
    ))
    setAuditLog([
      ...auditLog,
      { 
        timestamp: new Date().toLocaleString(), 
        action: `${user.name} funded idea with $${amount}`, 
        user: user.name 
      }
    ])
  }

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <div>
            <h2>Dashboard</h2>
            <p className="dashboard-subtitle">Welcome, {user.name}</p>
          </div>
          <div className="dashboard-stats">
            <div className="stat">
              <span className="stat-label">Total Ideas</span>
              <span className="stat-value">{ideas.length}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Total Funded</span>
              <span className="stat-value">${ideas.reduce((sum, i) => sum + i.fundingRaised, 0).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="dashboard-nav">
          <button 
            className={`tab ${view === 'marketplace' ? 'active' : ''}`}
            onClick={() => setView('marketplace')}
          >
            📈 Marketplace
          </button>
          <button 
            className={`tab ${view === 'submit' ? 'active' : ''}`}
            onClick={() => setView('submit')}
          >
            ✨ Submit Idea
          </button>
          <button 
            className={`tab ${view === 'audit' ? 'active' : ''}`}
            onClick={() => setView('audit')}
          >
            🔒 Audit Log
          </button>
        </div>

        <div className="dashboard-content">
          {view === 'marketplace' && (
            <IdeaMarketplace ideas={ideas} onFund={handleFundIdea} />
          )}

          {view === 'submit' && (
            <IdeaForm onSubmit={handleAddIdea} />
          )}

          {view === 'audit' && (
            <div className="audit-log">
              <h3>📋 Audit Log - Complete Transparency</h3>
              <p className="audit-description">
                Every action is logged. No hidden decisions. This is how we build trust.
              </p>
              <div className="log-entries">
                {auditLog.map((entry, idx) => (
                  <div key={idx} className="log-entry">
                    <span className="log-time">{entry.timestamp}</span>
                    <span className="log-action">{entry.action}</span>
                    <span className="log-user">by {entry.user}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
