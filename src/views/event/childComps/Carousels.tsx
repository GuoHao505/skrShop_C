import React, { useRef } from 'react'
import Swiper from '../../../components/common/swiper'
// import { getImg } from '../../../network/getImg'
const contentStyle: React.CSSProperties = {
    height: '324px',
    color: '#fff',
    lineHeight: '324px',
    textAlign: 'center',
    background: '#364d79',
};
const Carousels: React.FC = () => {
    let car = useRef(null)
    const imgs: any = [
      {  img:'http://image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_w.app_20210409172737.jpg'},
      {  img:'http://image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_w.app_20210409172737.jpg'},
      {  img:'http://image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_w.app_20210409172737.jpg'},
      {  img:'http://image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_w.app_20210409172737.jpg'},
    ]
    return (
        <div className="carousel">
            <Swiper imgs={imgs} width={'85%'}/>
        </div >
    )
}
export default Carousels
