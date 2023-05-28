import React, { useState } from 'react'

const TipCalculator = () => {
  const [bill, setBill] = useState(50)
  const [tip, setTip] = useState(18)
  const [people, setPeople] = useState(1)

  const totalTip = (bill * (tip * 0.01)).toFixed(2)
  const tipPerPerson = (totalTip / people).toFixed(2)

  return (
    <div>
      <label htmlFor='bill'>Bill</label>
      <input
        type='number'
        id='bill'
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <label htmlFor='tip'>Tip Percentage</label>
      <input
        type='number'
        id='tip'
        value={tip}
        onChange={(e) => setTip(e.target.value)}
      />
      <label htmlFor='people'>Number of People</label>
      <input
        type='number'
        id='people'
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />

      <p>Total tip: ${totalTip}</p>
      <p>Tip Per Person: ${tipPerPerson} </p>
    </div>
  )
}

export default TipCalculator
