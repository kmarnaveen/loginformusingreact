import React, { useState } from 'react'


export default function Address() {
    const [address,setAddress]=useState({});
    const handleChange=(e)=>{
      const name= e.target.name
      const value=e.target.value
      setAddress(values=>({...values,[name]:value}))
    }
  

   /* const [address2,setAddress2]=useState('')
    const [address3,setAddress3]=useState('')
    const [address4,setAddress4]=useState('')
    const [address5,setAddress5]=useState('')*/

  return (
    <div className='address'> 
    <form>
       <div> <label>Line 1</label>
        <input 
        type='text'
        name='line1'
        value={address.line1 || ''}
        onChange={handleChange} 
        required>
          </input></div>
          <div>
        <label>Line 2</label>
        <input 
        type='text'
        name='line2' 
        value={address.line2 || ''} 
        onChange={handleChange}></input></div>
        <div><label>District</label>
        <input required 
        type='text' 
        name='district'
        value={address.district || ''} 
        onChange={handleChange}></input></div>
        <div><label>State</label>
        <input required 
        type='text' 
        name='state'
        value={address.state || ''} 
        onChange={handleChange}></input></div>
        <div><label>Pincode</label>
        <input required 
        type='number' 
        name='pincode'
        value={address.pincode || ''} 
        onChange={handleChange}></input></div>
        </form>
    </div>
  )
}
