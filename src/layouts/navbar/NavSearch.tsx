import React,{useRef} from 'react'
import {SearchOutlined} from '@ant-design/icons'
import Search from 'antd/lib/transfer/search'
import { useNavigate } from 'react-router-dom'
export default function NavSearch() {
  let input:any = useRef('')
  let navigate = useNavigate();
  let search = ()=>{
   let inpVal = input.current.value;
      if(inpVal != null){
        navigate(`/search/${inpVal}`)
      }
 }

  return (
    <div className='ipts'>
        <div className='ipt'>
        <input type="text" placeholder='潮流，从搜索开始' ref={input}/> 
        <SearchOutlined style={{ fontSize: '16px', color: '#000000A6' ,cursor:'pointer'}} onClick={()=>search()} />
        </div>
    </div>
  )
}
