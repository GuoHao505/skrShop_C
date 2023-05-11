// import React from 'react'
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { Table, Button,message } from 'antd';
import { reqShopCart } from '../../network/reqShopCart';
import InputNumber from '../../components/common/InputNumber';
import { addToShopCart } from '../../network/addToShopCart'
import { deleteToShopcart } from '../../network/deleteShop';
import './index.scss'

export default function ShopCar() {

    let customer_id = localStorage.getItem('id');
    const [data, setData]: any = useState([])
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        reqShopCart({ customer_id }).then((res: any) => {
            console.log(res)
            if (!res.data) {
                setData([])
            } else {
                setData([...res.data])
            }
        })
    }, [flag])
    const columns = [
        {
            title: '图片',
            dataIndex: 'img',
            key: 'img',
            render: (_: any, record: any) => <img src={record.img} />

        },
        {
            title: '商品名称',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: '数量',
            dataIndex: 'num',
            key: 'num',

            render: (_: any, record: any) => <InputNumber defaultVal={record.num} min={1} clickRt={() => addShop(record)} clickLt={() => reduceShop(record)} ></InputNumber>
        },
        {
            title: '总计',
            key: 'total',
            dataIndex: 'total',

        },
        {
            title: '操作',
            key: 'action',
            dataIndex: 'action',
            render: (_: any, record: any) => <Button onClick={() => deleteShop(record.id)}>删除</Button>,
        }
    ];
    let datas: any = [];
    data.forEach((item: any) => {
        let obj: any = {

            name: item.title,
            img: item.img,
            price: item.price,
            num: item.num * 1,
            total: item.price * item.num,
            customer_id,
            params: JSON.parse(item.params),
            sku_id: item.sku_id,
            id: item.id,
        }
        datas.push(obj)
    })

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys: any) => {

        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    function reduceShop(record: any) {


    }
    function addShop(record: any) {
        let { customer_id, sku_id, num, params } = record
        let obj = {
            customer_id,
            sku_id,
            num,
            params
        }
        addToShopCart(obj).then((res) => {
            setFlag(!flag)
            message.success('添加商品成功')

        })
    }
    function deleteShop(id: number) {

        deleteToShopcart({ id }).then((res: any) => {
            
            setFlag(!flag)
            message.success('删除商品成功')

        })
    }


    return (
        <div className='shopcar'>
            <div className='shopcar_table'>
                <Table columns={columns} dataSource={datas} rowSelection={rowSelection} />
            </div>
            <div className='shopcar_foot'>
                <div className='foot_left'>
                    <p className='foot_price'>
                        <span className='total_price'>总价：</span>
                        ￥<span>0</span>
                    </p>
                </div>
                <div className='cart_pay'><NavLink to='/paytotal'><span>结算</span></NavLink></div>
            </div>
        </div>
    )
}
