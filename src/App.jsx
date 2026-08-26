function App() {
  return (
    <div style={{padding:"40px", fontFamily:"sans-serif", background:"#111", color:"white", minHeight:"100vh"}}>
      <h1>World Fund Engine</h1>
      <p>No master switch. Money circulates.</p>
      
      <button 
        onClick={() => alert('$1000 entered circulation!\n\n$350 → 35% Circulation\n$300 → 30% Reinvestment\n$100 → 10% Savings\n$250 → 25% Giving')}
        style={{padding:"12px 24px", fontSize:"18px", margin:"20px 0", cursor:"pointer", background:"#00ff88", border:"none", borderRadius:"8px"}}
      >
        Test $1000 Revenue
      </button>

      <div style={{marginTop:"30px"}}>
        <h3>Circulation Rules:</h3>
        <p>35% → Circulate to people</p>
        <p>30% → Reinvest in business</p>
        <p>10% → Savings</p>
        <p>25% → Giving</p>
      </div>
    </div>
  )
}

export default App
