import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Second() {
    const [name1,setName1]=useState('')
    const [name2,setName2]=useState('')

  return (
    <form>
   <div><input type='email' value={name1} onChange={(e)=>setName1(e.target.value)}></input></div>
   <div> <input type='email' value={name2} onChange={(e)=>setName2(e.target.value)}></input></div>
<Link to='/Third'>
  <button className='btn'>Next</button>
  </Link>
  

    </form>
  )
}
