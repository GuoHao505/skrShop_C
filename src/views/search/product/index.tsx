import React, { useState, useEffect } from 'react'
import { NavLink,useParams } from 'react-router-dom'
import getSearch from '../../../network/getSearch'

import './index.scss'
export default function Product() {
  let { word } = useParams(); 
  // let [list, setlist] = useState([]);
  // useEffect(() => {
  //     getSearch(word).then(res => {
  //         list = res.data
  //         setlist(list)

  //     })
  // }, [word])
  
  let [list, setlist]:any = useState([]);
  useEffect(() => {
      getSearch(word).then(res => {
          
          setlist([...res.data])
      })
  }, [word])
  return (
    <div className='search-product'>
      {
        list.map((shop: any) => {
          return (
            <div key={shop.id} className="product">
              <NavLink to={`/details/${shop.id}`}>
                <li>
                  <img src={shop.img} alt="" />
                </li>
                <div className='product-title'>{shop.title}</div>
                <p>目前没有活动</p>
                <h3>￥:{shop.price}</h3>
              </NavLink>

            </div>
          )
        })
      }

    </div>

  )
}
