import React, { useState } from 'react'

const TipCalculator = () => {
  const [bill, setBill] = useState(50)
  const [tip, setTip] = useState(18)
  const [people, setPeople] = useState(1)

  const totalTip = (bill * tip) / 100
  const tipPerPerson = totalTip / people

  return (
    <div>
      <label htmlFor='bill'>Bill</label>
      <input
        type='number'
        id='bill'
        min={0}
        value={bill}
        onChange={(e) => setBill(parseInt(e.target.value))}
      />
      <label htmlFor='tip'>Tip Percentage</label>
      <input
        type='number'
        id='tip'
        min={0}
        value={tip}
        onChange={(e) => setTip(parseInt(e.target.value))}
      />
      <label htmlFor='people'>Number of People</label>
      <input
        type='number'
        id='people'
        min={1}
        value={people}
        onChange={(e) => setPeople(parseInt(e.target.value))}
      />

      <p>Total Tip: {isNaN(totalTip) ? '-' : `$${totalTip.toFixed(2)}`}</p>
      <p>Tip Per Person: {isNaN(tipPerPerson) ? '-' : `$${tipPerPerson.toFixed(2)}`} </p>
    </div>
  )
}

export default TipCalculator
