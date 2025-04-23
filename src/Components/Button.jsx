import React from 'react'
import { useState } from 'react'

const  Button =({image,name,clickHandler})=>{
  const [count,setcount] = useState(0)
  return (
    <button title={name} onClick={clickHandler} >
        
        <img src={image} alt="image" />
        
        </button>
  )
}

export default Button