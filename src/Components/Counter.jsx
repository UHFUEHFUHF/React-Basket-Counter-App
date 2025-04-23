import React from 'react'

 const Counter = ({count,basket,full}) => {
  return (
    <>
   <div id='contain'> 
    
    <h3>{count} Apples</h3>
   <p>Basket {basket} {full}</p>
   
   
   </div>
   </>
  )
}
export default Counter
