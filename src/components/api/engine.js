import { calculateSplits } from '../src/lib/splits.js'

export async function processRevenue(newAmount, companyWallet) {
  // 1. Split the NEW money only
  const split = calculateSplits(newAmount)
  
  // 2. This is where you connect Stripe/Bank later
  console.log(`SENT TO SAVINGS: $${split.company} to ${companyWallet}`)
  console.log(`SENT TO PEOPLE: $${split.people}`)
  console.log(`SENT TO HUB: $${split.hub}`)
  console.log(`SENT TO WORLD: $${split.world}`)
  
  // 3. Log it
  const record = {
    ...split,
    type: "CIRCULATION",
    companyWallet: companyWallet
  }
  
  console.log("LEDGER:", record)
  return record
}

// TEST IT: processRevenue(1000, "myCompanyWallet")
