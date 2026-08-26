export default function CirculationDashboard({ cycleData, savings }) {
  return (
    <div style={{padding: "20px", fontFamily: "sans-serif"}}>
      <h2>PROTECTED</h2>
      <div style={{border: "2px solid green", padding: "10px", marginBottom: "20px"}}>
        <div>Savings: ${savings.toFixed(2)}</div>
        <small>No one touches this</small>
      </div>

      <h2>CIRCULATING THIS CYCLE</h2>
      <div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
        <Box label="35% TO PEOPLE" value={cycleData.people} />
        <Box label="30% TO COMPANY" value={cycleData.company} />
        <Box label="10% TO HUB" value={cycleData.hub} />
        <Box label="25% TO WORLD" value={cycleData.world} />
      </div>
      <p><b>Total: ${cycleData.total.toFixed(2)}</b></p>
    </div>
  )
}

function Box({label, value}) {
  return (
    <div style={{border: "1px solid #ccc", padding: "15px", minWidth: "120px", textAlign: "center"}}>
      <div style={{fontSize: "12px"}}>{label}</div>
      <div style={{fontSize: "24px", fontWeight: "bold"}}>${value.toFixed(2)}</div>
    </div>
  )
}
