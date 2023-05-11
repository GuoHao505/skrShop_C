import React, { useRef, useState } from 'react'
import './index.scss'
import { Props } from './inputnumber'

export default function InputNumber({ isabled=false, min=-1000, max=1000, step=1,defaultVal=1, precision,clickLt,clickRt }: Props) {
  
  const val:any = useRef(null);
  const [num, setNum] = useState(defaultVal)
 
  
  const [ltbool, setltBool] = useState(defaultVal===1?false:true)
  const [rtbool, setrtBool] = useState(true)

  function Decrease() {

    let reduce =  Number((Number(val.current.value) - step).toFixed(precision));
    if (reduce >= min) {
      setNum(reduce)
    }
    if (reduce >= max) {
      setNum(max)
    }
    if (reduce <= min) {
      setNum(min)
      setltBool(false)
    }else{
      setltBool(true)
      setrtBool(true)
    }

  }
  function Increase() {
    let add = Number((Number(val.current.value) + step).toFixed(precision));

    if (add <= max) {
      setNum(add)
    }
    if(add<=min){
      setNum(min)
    }
    if(add>=max){
      setNum(max)
      setrtBool(false)
    }else{
      setltBool(true)
      setrtBool(true)
    }
   
  }
  function inputChange(tarVal: string) {
    setNum(Number(tarVal))

  }
  function BtnLt(){
    return clickLt();
  }
  function BtnRt(){
    return clickRt();
  }

  return (
    <div className="fl-inputNumber">
      <button className='fl-input-decrease' onClick={()=>{Decrease();BtnLt()}} style={ltbool?{cursor:'pointer'}:{cursor:'not-allowed'}} disabled={!ltbool}>-</button>
      <input type="text" value={num} ref={val} onChange={(event) => inputChange(event.target.value)} disabled={isabled}></input>
      <button className='fl-input-increase' onClick={()=>{Increase();BtnRt()}} style={rtbool?{cursor:'pointer'}:{cursor:'not-allowed'}} disabled={!rtbool}>+</button>
    </div>
  )
}
