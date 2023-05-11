import React, { useEffect, useState } from 'react'
import { getImg } from '../../../network/getImg'
import { } from '../allcss/three.scss'
import Other from './other'

export default function Deition() {
  let [shopgetImg, setgetImg] = useState([])
  useEffect(() => {
    getImg({ parent_name: '服饰', start: 10, end: 12 }).then((data) => {
      shopgetImg = data
      setgetImg(shopgetImg)
    })
  }, [getImg])

  return (
    <div>
      <header>EDITION</header>
      <div className='third'>
        {
          shopgetImg.map(item => {

            return (
              <div key={item.id} className="picture">
                <img src={item.img} />
                <p className='title'>{item.title}</p>
                <span className='inilt'>www.stride.fun</span>
              </div>
            )
          })
        }
      </div>

      <div className='fourth'>
        <Other />
      </div>
    </div>
  )
}
