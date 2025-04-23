import React from 'react'
import Button from './Button'
import Right from "../assets/right.webp"
import Left from "../assets/left.webp"
import Counter from './Counter'
import { useState } from 'react'

 const AppleCOunter = () => {
    const [count,setcount] = useState(20)
    const [count1,setcount1] = useState(0)
    const RightF=()=>{
        if(count > 0){
        setcount((prev) => prev - 1)
        setcount1((prev) => prev + 1)
        }
    }


    const LeftF=()=>{
        if(count1 > 0){
        setcount1((prev)=> prev - 1)
        setcount((prev)=> prev + 1)
        }
       
    }
    let Basket2 = ""
    let Basket = ""
    if(count == 20 ){
       Basket = "Full"
    }else if(count < 20 && count != 0){
      Basket = "Running"
    }
    else{
      Basket = "Empty"
    }
    if(count1 == 20){
      Basket2 = "Full"
    }else if(count1 < 20 && count1 != 0){
      Basket2 = "Running"
    }
    else{
      Basket2 = "Empty"
    }
    return (
    <>
    <Counter count={count} basket={1} full={Basket}/>
    <Button clickHandler={LeftF} image={Left} name={"Left"}/>
    <Button clickHandler={RightF} image={Right} name={"Right"}/>
  <Counter count={count1} basket={2} full={Basket2}/>
  </>
  )
}

export default AppleCOunter
