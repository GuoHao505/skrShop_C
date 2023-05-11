import { useEffect, useState } from 'react'
import { Select, Pagination, message } from 'antd';
import { NavLink, useParams } from 'react-router-dom'
import { getTypeOneList,getTypeTwoList } from '../../network/getList';
import './index.scss'

const { Option } = Select;
export default function Secondary() {
    let { name } = useParams()

    const [data, setData]: any = useState([])
    const [data1, setData1]: any = useState([])
    const [page, setPage]: any = useState(1)
    const [value, setValue]: any = useState(1)
    const [pagesize, setPagesize] = useState(30)
    useEffect(() => {
        getTypeTwoList(name).then((res: any) => {
           
            switch (Number(value)) {
                case 1:
                    setData([...res.data])
                    break;
                case 2:
                    let a = res.data.sort(function (a: any, b: any) {
                        return a.price < b.price ? 1 : -1
                    });
                    setData([...a])
                    break;
                case 3:
                    let b = res.data.sort(function (a: any, b: any) {
                        return a.price > b.price ? 1 : -1
                    });
                    setData([...b])
                    break;
                case 4:
                    let c = res.data.sort(function (a: any, b: any) {
                        return a.sale < b.sale ? 1 : -1
                    });
                    setData([...c])
                    break;

            }


            let arr1 = res.data.slice((page - 1) * pagesize, pagesize * page)
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
        <div className='secondary'>
            <div className='title'>
                <p className='p_SeconDary'>{name}</p>
            </div>
            <div>
                <div className='ant-breadcrumb'>
                    <span>
                        <span className='ant-breadcrumb-link'>
                            <NavLink to={'/home'}>home</NavLink>

                        </span>
                        <span className='ant-breadcrumb-separator'>/</span>
                    </span>
                    <span>
                        <span> Secondary </span>
                    </span>
                </div>
            </div>
            <div className='BrandInfo'>
                <div className='brand_info_item'>
                    <p>{name}专区</p>
                    <span>www.stride.fun</span>
                </div>
            </div>
            <div className='PrimaryList'>
                <div className='hearder'>
                    <div className='left'>
                        <p>今日推荐</p>
                    </div>
                </div>
                <div className='sort'>
                    <span>共计{' 3 '}件</span>
                    <div>
                        <Select defaultValue="每页30" style={{ width: 120 }} onSelect={(value: any) => selectChange(value)}>
                            <Option value="30">每页30</Option>
                            <Option value="60">每页60</Option>
                            <Option value="90">每页90</Option>
                        </Select>

                        <Select defaultValue="默认" style={{ width: 120 }} onSelect={(value: any) => selectSort(value)}>
                            <Option value="1">默认</Option>
                            <Option value="2">价格最高</Option>
                            <Option value="3">价格最低</Option>
                            <Option value="4">销量最高</Option>
                        </Select>
                    </div>
                </div>
                <div className='list'>
                    <div className='AnCard'>
                        {
                            data1.map((item: any, index: number) => {
                                return (
                                    <div key={index} className='card' style={{ width: 'calc(20% - 8px)' }}>
                                        <NavLink to={`/details/${item.id}`}>
                                            <img src={item.img} alt="" />
                                            <h2>{item.title}</h2>
                                            <span>￥{item.price}</span>
                                            <p>www.stride.fun</p>
                                        </NavLink>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='pages'>
                    <Pagination defaultCurrent={1} total={data.length} onChange={(num) => pageChange(num)} pageSize={pagesize} showSizeChanger={false} />
                </div>
                
            </div>
        </div>
    )
}

