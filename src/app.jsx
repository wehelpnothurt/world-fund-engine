import { useState } from 'react'
import CirculationDashboard from './components/CirculationDashboard.jsx'
import { calculateSplits } from './lib/splits.js'

export default function App() {
  const [amount] = useState(1000) // test with $1000
  const [savings] = useState(5000) // protected savings
  
  const cycleData = calculateSplits(amount)

  return (
    <div style={{background: "#111", color: "white", minHeight: "100vh"}}>
      <h1 style={{textAlign: "center", padding: "20px"}}>World Fund Engine</h1>
      <p style={{textAlign: "center"}}>No master switch. Code over kings.</p>
      <CirculationDashboard cycleData={cycleData} savings={savings} />
    </div>
  )
}
