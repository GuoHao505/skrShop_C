// BEST里一级分类
import React, { useRef, useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';
import { Pagination } from 'antd'
import './index.scss'
import { getImg } from '../../../network/getImg';
import Select from './Select';

interface Tab {
    page: number;
    target: any;
    onClick: any;
}

const TabItem: React.FC = () => {

    let clothe = ["ALL MEN", "APPAREL", "BAG", "Clothes", "ACC"]
    let shoe = {
        parent_name: '鞋类',
        end: '40'
    }
    let close = {
        parent_name: '服饰',
        end: '30'
    }
    let ass = {
        parent_name: '配件',
        end: '20'
    }
    let znoe = {
        parent_name: '儿童专区',
        end: '10'
    }

    // 商品数据
    let [clotheImg, setClotheImg] = useState([])
    let [target, setTarget] = useState('All')
    useEffect(() => {

        if (target === 'All') {
            let shoplist: any = []
            getImg(shoe).then((data: any) => {
                shoplist.push(...data);

                getImg(close).then((data: any) => {
                    shoplist.push(...data);

                    getImg(ass).then((data: any) => {
                        shoplist.push(...data);

                        getImg(znoe).then((data: any) => {
                            shoplist.push(...data);
                            shoplist.sort(function (min: any, max: any) {
                                return (max.sale - min.sale)
                            });
                            setClotheImg(shoplist)
                        })
                    })
                })
            })



        } else {
            let obj = {
                parent_name: target,
                end: '100'
            }
            getImg(obj).then((data: any) => {
                setClotheImg(data)

            })
        }

    }, [target]);


    // 获取节点
    let Tabs_tab = useRef(null)
    // 点击改变样式并切换到对应的数据
    let ChangeStyle = (e: any) => {

        let text = e.target.innerText;

        setTarget(text)


        // 获取到当前所有的div元素
        let divs = document.querySelectorAll('.Tabs_tab div')
        // 遍历当前所有div元素，清除其类名
        Array.from(divs).forEach(item => {
            item.classList.remove('current');
        })
        // 给当前点击的div添加current类名
        e.target.classList.add('current')

    }

    // 页码
    function changePage(page: Tab) {
        console.log(page);
        
    }

    // 
    let lis = useRef(null)
    function ChangePage(e:any){
        // 获取 ul
        let spans:any = lis.current
        // 清除所有类名
        Array.from(spans.children).forEach((item:any)=>{
            item.children[0].classList.remove('active');
            
        })
        // 给当前点击的标签添加类名
        e.target.classList.add('active')
    }
    return (
        <div className='container-tab_item'>
            <div className='container-tab_content'>
                <div className='Tabs_tab' ref={Tabs_tab} onClick={ChangeStyle}>

                    <div className='current'>All</div>
                    <div>鞋类</div>
                    <div>服饰</div>
                    <div>配件</div>
                    <div>儿童专区</div>

                </div>
            </div>


            <div className='Clothes'>
                <div className='Clothes-select'>
                    {/* 一级分类中的二级分类 */}
                    <div className='Clothes-content'>
                        <ul className="Clothes-sort" ref={lis}  onClick={e=>{ChangePage(e)}}>
                            {
                                clothe.map(item => {
                                    return (
                                        <li  key={nanoid()} ><span>{item}</span></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* 下拉菜单 */}
                    <Select />
                </div>

                {/* 渲染数据 */}
                <div className='Clothes-shop'>
                    {/* 一 */}
                    <div className='Clothes-list'>
                        <div className='Clothes-lst_top'>
                            <ul className='sort'>
                                {
                                    clotheImg.map((item: any, index) => {
                                        while (index < 3) {
                                            return (
                                                <li className='sort_one' key={nanoid()}>
                                                    <NavLink to={`/details/${item.id}`}>
                                                        <span className='sort-icon_best'>
                                                            <strong>{index + 1}</strong>
                                                            <p>BEST</p>
                                                        </span>
                                                        <img src={item.img} alt="" />
                                                        <div className='textmax'>
                                                            <div className='text_wrap'>
                                                                <div className='brand'>LOEUVRE</div>
                                                                <div className='front'> [펜트하우스 이지아,강민경,효민,류이서,보라끌레르 착용] | [04/16 예약배송] </div>
                                                                <div className='product'> Sac de Trompette Small FA0SB013-10 </div>
                                                            </div>
                                                            <div className='price'>
                                                                <span className='discount_price'>37,800</span>
                                                                <span className='base_price'>42,000</span>
                                                                <span className='discount_rate'>10%</span>
                                                            </div>
                                                            <p className='reservation'>预定</p>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    {/* 二 */}
                    <div className='Clothes-listtwo' >
                        <div className='Clothes-lst_middle'>
                            <ul className='sorttwo'>
                                {
                                    clotheImg.map((item: any, index) => {
                                        while (index > 2 && index < 7) {
                                            return (
                                                <li className='sort_two' key={nanoid()}>
                                                    <NavLink to={`/details/${item.id}`}>
                                                        <span className='sort-icon_best'>
                                                            <strong>{index + 1}</strong>
                                                            <p>BEST</p>
                                                        </span>
                                                        <img src={item.img} alt="" />
                                                        <div className='textmax'>
                                                            <div className='text_wrap'>
                                                                <div className='brand'>LOEUVRE</div>
                                                                <div className='front'> [펜트하우스 이지아,강민경,효민,류이서,보라끌레르 착용] | [04/16 예약배송] </div>
                                                                <div className='product'> Sac de Trompette Small FA0SB013-10 </div>
                                                            </div>
                                                            <div className='price'>
                                                                <span className='discount_price'>37,800</span>
                                                                <span className='base_price'>42,000</span>
                                                                <span className='discount_rate'>10%</span>
                                                            </div>
                                                            <p className='reservation'>预定</p>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    {/* 三 */}
                    <div className='Clothes-listthree' >
                        <div className='Clothes-lst_bottom'>
                            <ul className='sortthree'>
                                {
                                    clotheImg.map((item: any, index) => {
                                        while (index > 6) {
                                            return (
                                                <li className='sort_three' key={nanoid()}>
                                                    <NavLink to={`/details/${item.id}`}>
                                                        <span className='sort-icon_best'>
                                                            <strong>{index + 1}</strong>
                                                            <p>BEST</p>
                                                        </span>
                                                        <img src={item.img} alt="" />
                                                        <div className='textmax'>
                                                            <div className='text_wrap'>
                                                                <div className='brand'>LOEUVRE</div>
                                                                <div className='front'> [펜트하우스 이지아,강민경,효민,류이서,보라끌레르 착용] | [04/16 예약배송] </div>
                                                                <div className='product'> Sac de Trompette Small FA0SB013-10 </div>
                                                            </div>
                                                            <div className='price'>
                                                                <span className='discount_price'>37,800</span>
                                                                <span className='base_price'>42,000</span>
                                                                <span className='discount_rate'>10%</span>
                                                            </div>
                                                            <p className='reservation'>预定</p>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 页码组件 */}
                <Pagination onChange={(value:any)=>changePage(value)} ></Pagination>
            </div >
        </div>
    )
}

export default TabItem




