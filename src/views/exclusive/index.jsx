import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import  './allcss/one.scss'
import Wantneed from './wantneed'
import Deition from './edition'
import Talking from './talking'
import Wantneeds from './wantneeds'
import { getImg } from '../../network/getImg'
import Swiper from '../../components/common/swiper'

export default function Exclusive() {
  let [shopgetImg, setgetImg] = useState([])
  useEffect(() => {
    getImg({ parent_name: '服饰', start: 10, end: 15 }).then((data) => {
      
      shopgetImg = data
      setgetImg(shopgetImg)
    })
  }, [])
    

  return (
    <div>
      <header>EXCLUSIVE</header>
      <div className='first'>
        <div className='rt'>
          <Swiper name={{ parent_name: '服饰', start: 10, end: 15 }} type={getImg}/>
        </div>
        <div className='lt' >
          {
            shopgetImg.map(item => {

              return (
                <div key={item.id} className="picture">
                  <img src={item.img} />
                  <h1 className='titleone'>{item.title}</h1><br />
                  <h1 className='iniltone'>www.stride.fun</h1>
                </div>
              )
            })
          }
        </div>
      </div>
      <Wantneed />
      <Deition />
      <Talking />
      <Wantneeds />

      <Outlet></Outlet>
    </div>


  )
}
