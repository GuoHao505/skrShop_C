import React, { useEffect, useState } from 'react'
import { } from '../allcss/four.scss'
import { getImg } from '../../../network/getImg'

export default function Talking() {
  let [shopgetImg, setgetImg] = useState([])

  useEffect(() => {
    getImg({ parent_name: '服饰', start: 16, end: 18 }).then((data) => {
      shopgetImg = data
      setgetImg(shopgetImg)
    })
  }, [getImg])


  return (
    <div>
      <header>TALKING</header>
      <div className='fifth'>
        {
          shopgetImg.map(item => {

            return (
              <div key={item.id} className="picture">
                <img src={item.img} />
                <p className='title'>{item.title}</p><br />
                <span className='inilt'>www.stride.fun</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
