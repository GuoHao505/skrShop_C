import React from 'react'
import { useEffect, useState } from 'react'

import { Pagination, Select, message } from 'antd';
import { getTypeOneList,getTypeTwoList } from "../../../network/getList"
import { NavLink } from 'react-router-dom'

export default function PageList(props:any) {
  const [data, setData]: any = useState([])
  const [data1, setData1]: any = useState([])
  const [page, setPage]: any = useState(1)
  const [value, setValue]: any = useState(1)
  const [pagesize, setPagesize] = useState(30)
  let {name}=props
  useEffect(() => {
    getTypeOneList(name).then((res: any) => {
    
      switch (Number(value)) {
        case 1:
          setData([...res.res])
          break;
        case 2:
          let a = res.res.sort(function (a: any, b: any) {
            return a.price < b.price ? 1 : -1
          });
          setData([...a])
          break;
        case 3:
          let b = res.res.sort(function (a: any, b: any) {
            return a.price > b.price ? 1 : -1
          });
          setData([...b])
          break;
        case 4:
          let c = res.res.sort(function (a: any, b: any) {
            return a.sale < b.sale ? 1 : -1
          });
          setData([...c])
          break;

      }


      let arr1 = res.res.slice((page - 1) * pagesize, pagesize * page)
      setData1([...arr1])
    })
    
  }, [page, pagesize, name, value])

  function pageChange(num: number) {


    setPage(num)
  }
  function selectChange(value: number) {
    setPagesize(value)
    setPage(1)
  }
  function selectSort(value: number) {
    setValue(value)

  }
  return (
    <div>
      <div className='sort'>
        <span>共计{data.length}件</span>
        <div>
          <Select
            defaultValue="每页30"
            style={{
              width: 120,
            }}
            onSelect={(value: any) => selectChange(value)}>
            <Select.Option value="30">每页30</Select.Option>
            <Select.Option value="60">每页60</Select.Option>
            <Select.Option value="90">每页90</Select.Option>
          </Select>
          <Select
            defaultValue="默认"
            style={{
              width: 120,
            }}
            onSelect={(value: any) => selectSort(value)}>
            <Select.Option value="1">默认</Select.Option>
            <Select.Option value="2">价格最高</Select.Option>
            <Select.Option value="3">价格最低</Select.Option>
            <Select.Option value="4">销量最高</Select.Option>
          </Select>

        </div>
      </div>
      <div className='list'>
        <ul>
          {
            data1.map((item: any) => {
              return (
                <li key={item.id}>
                  <NavLink to={`/details/${item.id}`}>
                    <img src={item.img} alt="" />
                    <h4>{item.title}</h4>
                    <p>￥{item.price}</p>
                    <span>{item.sale}</span>
                  </NavLink>

                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='page'>
        <Pagination defaultCurrent={1} total={data.length} onChange={(num) => pageChange(num)} pageSize={pagesize} showSizeChanger={false} />
      </div>

    </div>
  )
}
