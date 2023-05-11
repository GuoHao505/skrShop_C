import React, { useRef, useEffect, useState } from 'react'
import Slider from 'react-slick';
import { getTypeTwoList } from '../../../network/getList';
import { getSpu } from "../../../network/getHomeList"
import { getImg } from '../../../network/getImg'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

import './index.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousels: React.FC<any> = ({ name = null, width = '100%', start = 0, end = 10, type = getTypeTwoList, imgHeight = '100%', imgWidth = '100%', centerMode = false, dots = false, className = null, slidesToShow = 1, centerPadding = '0px', slidesToScroll = 1, infinite = true, swiperWidth = "100%", text = false, arrows = true, imgs = null }: any) => {
    const [data, setData]: any = useState([])

    let car: any = useRef('')
    let next = () => {
        car.current.slickNext()
    }
    let previous = () => {
        car.current.slickPrev()

    }
    const settings = {
        dots,//是否有圆点
        infinite,//无限环绕内容
        speed: 500,
        slidesToShow,//一帧要显示多少张幻灯片
        slidesToScroll,//一次要滚动多少张幻灯片
        // dotsClass:'dots',//下方原点的类名
        arrows: false, //是否有箭头
        // autoplay:true,//是否自动轮播
        centerMode,//是否为中心模式
        centerPadding,

    };

    let arr: any = []
    useEffect(() => {

        imgs ? setData([...imgs])
            : type(name).then((res: any) => {


                if (type == getTypeTwoList) {
                    arr = res.data.slice(start, end)
                } else if (type === getSpu) {
                    arr = res.res.slice(start, end)
                } else if (type === getImg) {
                    arr = res
                }
                setData([...arr])
            })
    }, [])

    return (
        <div className='MySwiper' style={{ width: swiperWidth }}>
            <div className="cent" style={{ width }}>
                <div >
                    <Slider ref={car} {...settings}>
                        {
                            data.map((item: any, index: any) => {
                                return (

                                    text ?
                                        <div key={index} className={className} >
                                            <img src={type === getSpu ? item.swiperImg : item.img} alt="" style={{ height: imgHeight, width: imgWidth }} />
                                            <h2>{item.title}</h2>
                                            <span>www.stride.fun</span>
                                        </div> :
                                        <div key={index} className={className}>

                                            <img src={type === getSpu ? item.swiperImg : item.img} alt="" style={{ height: imgHeight, width: imgWidth }} />
                                        </div>

                                )
                            })
                        }
                    </Slider>

                </div>
            </div>
            {
                arrows ?
                    <div style={{ textAlign: "center" }}>
                        <button className="arrows" onClick={previous} style={{ left: '25px' }}>
                            <ArrowLeftOutlined />
                        </button>
                        <button className="arrows" onClick={next} style={{ right: '25px' }}>
                            <ArrowRightOutlined />
                        </button>
                    </div> : null
            }

        </div >
    )
}
export default Carousels
