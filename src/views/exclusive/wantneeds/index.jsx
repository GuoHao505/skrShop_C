import React, { useEffect, useState } from 'react'
import { } from '../allcss/five.scss'
import { getImg } from '../../../network/getImg'

export default function Wantneeds() {
  let [shopgetImg, setgetImg] = useState([])
  useEffect(() => {
    getImg({ parent_name: '服饰', start: 19, end: 26 }).then((data) => {
      shopgetImg = data
      setgetImg(shopgetImg)
    })
  }, [getImg])
  return (
    <div>
      <header>WANT.NEED</header>
      <button className='btns'>+ALL(1943)</button>
      <div className='end'>
        {
          shopgetImg.map(item => {

            return (
              <div key={item.id} className="pictureend">
                <img src={item.img} />
                <p className='titleend'>{item.title}</p>
                <span className='iniltend'>www.stride.fun</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
