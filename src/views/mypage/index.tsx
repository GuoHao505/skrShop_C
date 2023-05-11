import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Input, Space, Table, Tag } from 'antd';

import './index.scss'

export default function PersonalCenter() {
    let [show, setShow] = useState(true);
    const isChangePsw = () => {
        show ? setShow(false) : setShow(true)
    }
    const isClose = () => {
        show ? setShow(false) : setShow(true)
    }
    const onFinish = ((values: any) => {
        console.log('Success:', values);
    })

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const columns1 = [
        {
            title: '订单日期',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: '订单号',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '商品信息',
            dataIndex: 'message',
            key: 'message',
        },
        {
            title: '数量',
            key: 'num',
            dataIndex: 'num',
        },

        {
            title: '商品价格',
            dataIndex: 'price',
            key: 'price',

        },
        {
            title: '进度',
            dataIndex: 'action',
            key: 'action',

        },
    ];
    const columns2 = [
        {
            title: '收货人姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '收货地址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '收货人电话',
            dataIndex: 'tel',
            key: 'tel',
        },
       
        {
            title: '操作',
            dataIndex: 'action',
            key: 'action',

        },
    ];
    const data1 = [
        {
            key: '1',
            date: '2022-10-05 11:31:38',
            id: 32,
            message: '东奥特许商品连帽卫衣-女款',
            num: '1',
            price: '255',
            action: '待支付'
        },

    ];
    const data2 = [
        {
            key: '1',
            name: '1',
            address: '河北省-石家庄市-长安区-z ',
            tel:'11000012255',
            action:'删除'
          
        },

    ];
    return (
        <div className='PersonalCenter'>
            <div className='subTitleWarp'>
                <h1>个人中心</h1>
                <p className='titleContent'>
                    <span>
                        <NavLink to={'/'}><small>主页</small></NavLink>
                        <em>&gt;</em>
                    </span>
                    <span>个人中心</span>
                </p>
                <p className='changePassword' onClick={() => isChangePsw()}><span >修改密码</span></p>
                <div className='forgetPassword' id={show ? '' : 'active'}>
                    <div className='modify' >
                        <button className='closeModify' onClick={() => isClose()}>X</button>
                        <div className='titleWarp'>
                            <h1>修改密码</h1>
                        </div>
                        <div className='modify_ipt'>
                            <div className='ipt1'>
                                <Form
                                    name="basic"
                                    labelCol={{
                                        span: 4,
                                    }}
                                    wrapperCol={{
                                        span: 20,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="用户名"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="新密码"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                </Form>
                                <div className='sure'>
                                    <Form.Item
                                        wrapperCol={{
                                            offset: 4,
                                            span: 16,
                                        }}
                                    >
                                        <Button type="primary" htmlType="submit">
                                            确定
                                        </Button>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='myPageSbn'>
                <div className='myPageSnbTop'>
                    <ul className='myPageSnbTop-ul'>
                        <li>我的♡</li>
                        <li>订单管理</li>
                        <li>我的活动</li>
                        <li>购物优惠</li>
                        <li>信息管理</li>
                        <li>查询内容</li>
                    </ul>
                </div>
                <div className='myPageSnbBot'>
                    <div className='myPageSnbBot-ul'>
                        <ul>
                            <li>我的♡物品</li>
                            <li>我的♡品牌</li>
                            <li>我的♡风格</li>
                        </ul>
                        <ul>
                            <li>订购/配送查询</li>
                            <li>取消/交换/退货查询</li>
                            <li>收到的礼品盒</li>
                            <li>签发凭证</li>
                        </ul>
                        <ul>
                            <li>进货通知</li>
                            <li>活动参加与明细</li>
                            <li>WAND参与明细</li>
                        </ul>
                        <ul>
                            <li>会员等级</li>
                            <li>优惠券</li>
                            <li>W POINT</li>
                            <li>预收款</li>
                            <li>购物券</li>
                        </ul>
                        <ul>
                            <li>修改会员信息</li>
                            <li>管理地址蒲</li>
                            <li>W.工资管理</li>
                            <li>退款账户管理</li>
                            <li>会员退出</li>
                        </ul>
                        <ul>
                            <li>商品Q&A</li>
                            <li> 商品评价</li>
                            <li>1:1查询</li>
                        </ul>
                    </div>
                </div>
                <div className='picture'>
                    <NavLink to={'/'}><img src={require('./a.jpg')} alt="" /></NavLink>
                </div>
                <div className='tableTitle'>
                    <span className='tabLt'>最近订单</span>
                    <span className='tabRt'>more +</span>
                </div>

                <div className='table'>
                    <Table columns={columns1} dataSource={data1} />
                </div>


                <div className='tableTitle'>
                    <span className='tabLt'>我的地址</span>
                    <span className='tabRt'>+ 新增地址</span>
                </div>

                <div className='table'>
                    <Table columns={columns2} dataSource={data2} />;
                </div>


            </div>
        </div>
    )
}
