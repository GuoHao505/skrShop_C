import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Select, InputNumber, message } from 'antd'
import { NavLink, Outlet } from 'react-router-dom'
import { addToShopCart } from '../../../network/addToShopCart';
import { getShopById } from '../../../network/getShopById'

import 'antd/dist/antd.css';


const { Option } = Select;
function Magnifier({ id }: any) {

    const [data, setData]: any = useState([])
    const [img, setImg]: any = useState([])
    const customer_id = localStorage.getItem('id')
    //放大镜
    const imgbox = useRef(null)
    const magnifier = useRef(null)
    const hideBox = useRef(null)
    const bigImg = useRef(null)
    const delitbox = useRef(null)
    useEffect(() => {
        getShopById(id).then((res: any) => {
            console.log(res)
            let arr = res.data.map((item: any) => {
                return JSON.parse(item.imgs)
            })
            setData([...res.data])
            setImg([...arr[0]])
        })
    }, [])
    let deiltFF: any = delitbox.current
    let box1F: any = imgbox.current
    let box1S: any = magnifier.current
    let hidF: any = hideBox.current
    let hidS: any = bigImg.current


    function boxMove(e: any) {
        var x = e.pageX - deiltFF.offsetLeft
        var y = e.pageY - deiltFF.offsetTop
        let Xmax = box1F.offsetWidth - box1S.offsetWidth;
        let Ymax = box1F.offsetHeight - box1S.offsetHeight;
        var makX = x - box1S.offsetWidth / 2;
        var makY = y - box1S.offsetHeight / 2;
        makX = makX < 0 ? 0 : makX;
        makX = makX > Xmax ? Xmax : makX;
        makY = makY < 0 ? 0 : makY;
        makY = makY > Ymax ? Ymax : makY;

        box1S.style.top = makY + 'px';
        box1S.style.left = makX + 'px';

        var imgXMax = hidS.offsetWidth - hidF.offsetWidth
        var imgYMax = hidS.offsetHeight - hidF.offsetHeight

        hidS.style.marginLeft = -makX * imgXMax / Xmax + 'px'
        hidS.style.marginTop = -makY * imgYMax / Ymax + 'px'
    }
    function boxOver() {
        box1S.style.display = 'block';
        hidF.style.display = 'block'
    }
    function boxOut() {
        box1S.style.display = 'none';
        hidF.style.display = 'none'
    }

    //换图
    const asideul = useRef(null)
    const shopimg1 = useRef(null)
    const choiceimg = useRef(null)
    let ulbox1: any = asideul.current
    let ulbox2: any = choiceimg.current
    let imgsmall: any = shopimg1.current
    let imgbig: any = bigImg.current
    let lastTime: any;
    function box1Click(e: any) {
        var target = e.target
        if (target.nodeName === 'IMG') {
            imgsmall.src = target.src
            imgbig.src = target.src
        }
    }
    function box2Click(e:any){
             var target = e.target
                if (target.nodeName === 'IMG') {
                    if (lastTime) {
                        lastTime.style.display = ''
                        lastTime.style.border = ''
                    }
                    target.style.display = 'inline-block'
                    target.style.border = '1px solid #000'
                    imgsmall.src = target.src
                    imgbig.src = target.src
                    lastTime = target
                }
    }

    function addShopcar(item: any) {
        if (!customer_id) {
            message.error('加入购物车失败，请先登录')
        }
        const { spu_id, param } = item
        let obj = {
            customer_id,
            sku_id: spu_id,
            num: 1,
            params: JSON.parse(param)
        }

        addToShopCart(obj).then((res: any) => {
            console.log(res);
            message.success('加入购物车成功')
        })
    }
    return (
        <div className='details-magnifier'>
            {/* {
                data.map((item: any) => {
                    return ( */}
            <Fragment>
                <div className='details-magnifier-left' ref={delitbox}>
                    {/* 侧边商品 */}
                    <aside>
                        <ul ref={asideul} onClick={(e) => box1Click(e)}>
                            {
                                img.map((item: any, i: number) => {
                                    return <li key={i}><img src={item.small} /></li>
                                })
                            }
                        </ul>
                    </aside>
                    {/* 放大镜内容区*/}
                    <main>
                        {
                            img.map((item: any, i: number) => {
                                return (
                                    i === 0 ?
                                        <Fragment key={i}>
                                            <div className='Showbox' ref={imgbox} onMouseMove={(e) => boxMove(e)} onMouseOver={boxOver} onMouseOut={boxOut} >
                                                <img src={item.small} alt="" ref={shopimg1} />
                                                <p ref={magnifier}></p>
                                            </div>
                                            <div className='Hidebox' ref={hideBox}>
                                                <img src={item.normal} alt="" ref={bigImg} />
                                            </div>
                                        </Fragment> : null
                                )
                            })
                        }

                    </main>
                </div>
                {/* 右侧数据区域 */}
                <div className='details-magnifier-right'>
                    {
                        data.map((item: any, index: number) => {
                            return (

                                <div className='details-magnifier-right-top' key={index}>
                                    <h1>{data.title}</h1>
                                    <span className='nowTimes'>￥{data[0].price}</span>
                                    <span className='pastTimes'>￥{data[0].special_price}</span>
                                    <div className="promotion">
                                        <span className="title"> 促销 </span>
                                        <span className="con">官方商城全场包邮</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className='details-magnifier-right-middel'>
                        {/* 选择样式区域 */}
                        <ul ref={choiceimg} onClick={(e)=>box2Click(e)}>
                            {
                                img.map((item: any, i: number) => {
                                    return <li key={i}><img src={item.small} alt="" /></li>
                                })
                            }
                        </ul>
                        <section>
                            <label>尺寸</label>
                            <Select defaultValue="L" style={{ width: 120 }} bordered={false} >
                                <Option value="XL">XL</Option>
                                <Option value="L">L</Option>
                                <Option value="S">S</Option>
                                <Option value="XXL">XXL</Option>
                            </Select>
                            <label >数量</label>
                            <InputNumber min={1} max={10} defaultValue={3} bordered={false} />
                        </section>
                    </div>
                    <div className='details-magnifier-right-down'>
                        {
                            data.map((item: any, index: number) => {
                                return (
                                    <Fragment key={index}>
                                        <NavLink to=''><span className="down-a" onClick={() => addShopcar(item)}>加入购物车</span></NavLink>
                                        <NavLink to='/payTotal' ><span className="down-b" >立即购买</span></NavLink>
                                    </Fragment>
                                )
                            })
                        }

                    </div>
                </div>

            </Fragment>

        </div>
    )
}

export default Magnifier