import React, { useRef, useEffect, useState } from 'react'
import wecart from '../../assets/img/order/wecart.jpeg'
import alipay from '../../assets/img/order/alipay.jpeg'
import { CloseCircleOutlined } from '@ant-design/icons';
import { getAddress } from '../../network/getAddress';
import { delAddress } from '../../network/delAddress';
import Decrement from '../../components/common/Deliveryarea'
import { creatDetail } from '../../store/actions'
import { connect } from 'react-redux'
import { Button, message } from 'antd'

import './index.scss'

function Paytotal({ list, creatDetail }: any) {

    let morecontent: any = useRef(null)
    const [flag, setFlag]: any = useState(false)
    const [all, setAll]: any = useState([])

    let del = (id: any) => {
        delAddress({ id }).then((data: any) => {

            if (data.code === 200) {
                message.success('删除地址成功');
                setFlag(!flag)
            } else {
                message.error('删除地址失败');
            }
        })
    }

    useEffect(() => {
        getAddress({ customer_id: 1 }).then((data: any) => {
            setAll([...data.data])
        })

    }, [flag,list])

    let disappearTow = () => {
        morecontent.current.style.display = 'none'

    }
    let show = () => {
        creatDetail(true)
    }
    let showTow = () => {

        morecontent.current.style.display = 'block'
    }
    return (
        <div>
            <div className='total'>
                <div className='left'>
                    <div>
                        <div className='address'>
                            <h1>结算</h1>
                            <div className='not-empty'>
                                <div className='title'>收货地址</div>
                                {

                                }
                                <div className='content'>
                                    <div className='defaultAddress'>
                                        <div><span>收货人:  </span>撒旦-421554</div>
                                        <div><span>地址:   </span>内蒙古自治区-乌海市-乌达区-2222222</div>
                                    </div>
                                    <div className='right'>
                                        <div className='d-address'>默认地址</div>
                                        <div className='defaultContent'>
                                            <div className='editor' onClick={() => { showTow() }}>编辑 /</div>
                                            <div className='more' onClick={() => { showTow() }}> 更多</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 李广辉？？？？？？？？ */}
                        <div className='moreContent' ref={morecontent}>
                            <div className='title'>
                                <h2>选择你的收货地址</h2>
                                <div className='cancel'>
                                    <i className='anticon anticon-close-circle' onClick={() => { disappearTow() }}>
                                        <CloseCircleOutlined />
                                    </i>
                                </div>
                            </div>
                            {/* 收货地址？？？？？？？？？？？？？？？ */}
                            {
                                all ? all.map((item: any) => {
                                    return (<li>
                                        <div className="checkRa">
                                            <input type="radio" name="address" value={0} />
                                        </div>
                                        <div className="defaultAddress">
                                            <div >
                                                <span >收货人：{item.name}</span>
                                                {item.tel} {item.prime ? <span>默认地址</span> : ''}</div>
                                            <div >
                                                <span style={{ marginRight: " 20px" }}>地址: </span>
                                                {item.address}</div>
                                        </div>
                                        <div className="right">
                                            <span onClick={() => { show() }}>编辑</span> &nbsp;
                                            <span style={{ color: 'red' }} onClick={() => { del(item.id) }}>删除</span>
                                            <div >设为默认地址</div>
                                        </div>
                                    </li>)
                                }) : <h3>当前没有地址</h3>
                            }

                            <div className="submit">
                                <div className="add" onClick={() => { show() }}>
                                    <i aria-label="icon: plus-circle" className="anticon anticon-plus-circle">
                                        <svg viewBox="64 64 896 896" data-icon="plus-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" className="">
                                            <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z">
                                            </path>
                                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                        </svg>
                                    </i> 新增收货地址 </div>
                                <Button >删除</Button>
                                <button type="button" className="sure ant-btn" ant-click-animating-without-extra-node="false" onClick={() => { disappearTow() }}>
                                    <span>确 认</span>
                                </button>
                            </div>
                        </div>

                        {/* 赵世立？？？？？？？？？ */}
                        <Decrement bone={list}></Decrement>

                    </div>
                    <div className='shopDetail'>
                        <div className='title'>商品明细(共0件)</div>
                        <ul className='orderList'></ul>
                    </div>
                </div>
                <div className='right'>
                    <div className='order-total'>
                        <div className='Order'>
                            <h1>请选择支付方式</h1>
                            <div className='type'>
                                <div className='wechat'>

                                    <img src={wecart} alt="" />
                                </div>
                                <div className='alipay'>
                                    <img src={alipay} alt="222" />
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li className='title'>商品小计</li>
                            <li>
                                <span>商品总价：</span>
                                <span>￥ 999</span>
                            </li>
                            <li>
                                <span>优惠：</span>
                                <span>￥ 0</span>
                            </li>
                            <li>
                                <span>其他：</span>
                                <span>+￥ 0</span>
                            </li>
                            <li className='pay'>
                                <div>
                                    <div>总计</div>
                                    <div className='payPrice'>￥ 0</div>
                                </div>
                                <div>
                                    <button className='ant-btn ant-btn-danger'>
                                        <span>提交订单</span>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default connect(
    (state: any) => ({ list: state.Dizhi }),//映射状态
    { creatDetail }//映射操作状态的方法
)(Paytotal);