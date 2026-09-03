import React, { useState } from 'react'
import './IdeaForm.css'

function IdeaForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    fundingGoal: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.title && formData.description && formData.fundingGoal) {
      onSubmit({
        title: formData.title,
        description: formData.description,
        fundingGoal: parseInt(formData.fundingGoal)
      })
      setFormData({ title: '', description: '', fundingGoal: '' })
    }
  }

  return (
    <div className="idea-form">
      <div className="form-card">
        <h3>✨ Share Your Idea</h3>
        <p className="form-description">
          All ideas matter. Share your innovation with the World Fund Engine community.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Idea Title</label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Give your idea a compelling title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your idea and its impact on the world..."
              rows="6"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fundingGoal">Funding Goal ($)</label>
            <input
              id="fundingGoal"
              type="number"
              name="fundingGoal"
              value={formData.fundingGoal}
              onChange={handleChange}
              placeholder="How much funding do you need?"
              min="1000"
              step="1000"
              required
            />
          </div>

          <button type="submit" className="primary submit-btn">
            Post Idea to Marketplace
          </button>
        </form>
      </div>

      <div className="idea-guidelines">
        <h4>💡 Idea Guidelines</h4>
        <ul>
          <li>Be clear about the problem you're solving</li>
          <li>Explain the positive impact on people or planet</li>
          <li>Set a realistic funding goal</li>
          <li>Be open to collaboration with other businesses</li>
          <li>Remember: All ideas matter. We grow together.</li>
        </ul>
      </div>
    </div>
  )
}

export default IdeaForm
