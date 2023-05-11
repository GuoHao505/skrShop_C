import React, { useEffect, useState } from 'react'
import {getImg} from '../../../network/getImg'
import { } from '../allcss/two.scss'


export default function Wantneed() {
  let [shopgetImg, setgetImg] = useState([])
  useEffect(() => {
      getImg({ parent_name: '服饰', start: 68, end:75 }).then((data) => {
      shopgetImg = data
      setgetImg(shopgetImg)
    })
  }, [getImg])

  return (
    <div>
      <header>WANT.NEED</header>
      <button className='btns'>+ALL(1943)</button>
      <div className='second'>
        {
          shopgetImg.map(item => {

            return (
              <div key={item.id} className="picture">
                <img src={item.img} />
                <p className='deition_three'>{item.title}</p>
                <span >www.stride.fun</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
