import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const [formId, setFormId] = useState('');
const navigate = useNavigate()
 const  handleClick = (id)=>{
    setFormId('')
    navigate(`/debug/form/${id}`)
 }

 


  return (
    <div className='home-container'>
      <div className="form-id-wrapper">
        <input
         type="text" 
         placeholder='Enter form id'
         aria-label='Enter form id'
         title='Enter form id'
         onChange={(e)=>setFormId(e.target.value)}
        value={formId}
         required
         />
         <button 
         type='button'
         disabled={!formId}
         onClick={()=>handleClick(formId)}
         title="check button"
         className='submit-btn'
         style={{opacity: !formId && 0.5}}
         >Check details</button>
      </div>
    </div>
  )
}

export default Home