import React, { useState } from 'react'
import Creditcard from './Creditcard'
import Address from './Address'
import { Link } from 'react-router-dom'


export default function Third() {
  const [radioStatus,setRadioStatus]=useState(false);


  const func=(e)=>{
  console.log(e.target.value)
  if(e.target.value==='address'){
    setRadioStatus('address')
  }
  else{
    setRadioStatus('creditCard')
  }
    
  }
  
  const handleSubmit=()=>{
    alert('Form Submitted')
  }
  return (
    <>
    <div><label>Enter Address</label>
   <input onClick={func} type='radio' name='radio' value='address' checked={radioStatus==='address'}></input></div>
   {radioStatus==='address' && <div><Address/></div>}
    <div><label>Credit Card</label>
   <input onClick={func} type='radio' name='radio' value='creditCard' checked={radioStatus==='creditCard'}></input></div>
   {radioStatus==='creditCard' && <div><Creditcard/></div>}
   <Link to='/Final'>
  <button onClick={handleSubmit} className='btn'>Submit</button>
  </Link>
    </>
  )
}
