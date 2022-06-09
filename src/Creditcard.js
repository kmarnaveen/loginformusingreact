import React, { useState } from 'react'

function Creditcard() {
const [credit,setCredit]=useState({});
const handleChange=(e)=>{
  const name = e.target.name;
  const value = e.target.value;
  setCredit(values=>({...values,[name]:value}))
}

  return (
    <div className='creditcard'>
        <form >
         <label>Card Number</label>
        <input 
        type='number' 
        name='cardnumber'
        value={credit.cardnumber || ""}
        onChange={handleChange}
        >
        </input><br></br>
        <label>Card Holder Name</label>
        <input type='text'
        name='cardowner'
        value={credit.cardowner || ''}
        onChange={handleChange}
        >
        </input><br></br>
        <label>CVV</label>
        <input
         type='number'
          name='cvv'
          value={credit.cvv ||''}
          onChange={handleChange}>
            </input><br></br>
        </form>
    </div>
  )
}

export default Creditcard