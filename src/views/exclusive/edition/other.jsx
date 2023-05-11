import React, { useEffect, useState } from 'react'
import { getImg } from '../../../network/getImg'
import { } from '../allcss/three.scss'
// import {connect} from 'react-redux'
// import {createIncrementAction} from '../../../store/actions'

export default function Other() {
  let [shopgetImg, setgetImg] = useState([])
  useEffect(() => {
    getImg({ parent_name: '服饰', start: 6, end: 9 }).then((data) => {
      shopgetImg = data
      setgetImg(shopgetImg)
      // createIncrementAction(shopgetImg)
 
    })
  }, [getImg])
 
  return (
    <div>
      {
        shopgetImg.map(item => {

          return (
            <div key={item.id} className="pictures">
              <img src={item.img} />
            </div>
          )
        })
      }
    </div>
  )
}

// export default connect(
//   (state) => ({ list: state.shopList }),//映射状态
//   { createIncrementAction }//映射操作状态的方法
// )(Other);

