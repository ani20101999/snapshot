import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Invalidpage = () => {
    const navigate=useNavigate()
  return (<>
    <div className='invalid'>Invalidpage</div>
    <div className='error'>Error 404</div>
    <div className='btn-div'>
    <button type='button' onClick={()=>navigate("/")}>Go Back</button>
    </div>
    </>
  )
}
