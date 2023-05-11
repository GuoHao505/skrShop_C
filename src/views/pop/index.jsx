import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import { getTypeTwoList } from '../../network/getList'
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import './index.scss'
export default function DemoSwiper(){
  let [shop, setShop] = useState([]);
  useEffect(() => {
    getTypeTwoList(
      '休闲鞋'
    ).then((data) => {
      console.log(data);
      let shopObj = data.data
      console.log(shopObj);
      setShop(shopObj)
    })
  }, [])

  // swiper的html结构
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
    >
      {
        shop.slice(9, 14).map((item, index) => (
          <SwiperSlide key={item.id} className={`swiper-slide swiper-slide${index + 1}`}>
            <img src={item.img} alt="错误" />
            <p>{item.title}</p>
            <span className='tip'>右划查看下一款</span>
          </SwiperSlide>
        ))
      }
    </Swiper >
  )
}



