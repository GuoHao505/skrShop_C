import { useEffect, useState } from 'react'
import { Button, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { getTypeOneList } from "../../network/getList.js"
import { getTypeTwo } from '../../network/getNav.js'
import { NavLink, useParams } from 'react-router-dom'
import PageList from '../../components/common/PageList'
import './index.scss'

export default function Primary() {
    let { name } = useParams()
    const [data2, setData2]: any = useState([])
    const [data3, setData3]: any = useState([])
    useEffect(() => {
        getTypeOneList(name).then((res: any) => {
            let d = res.res.sort(function (a: any, b: any) {
                return a.sale < b.sale ? 1 : -1
            })
            let e = d.slice(0, 10)
            setData3([...e])
        })
        getTypeTwo(name).then(res => {

            let arr2 = res.data.slice(0, 5)
            setData2([...arr2])
        })
    }, [])

    return (
        <div className='primary'>
            <div className='title'>
                <h1>{name}</h1>
            </div>
            <div className='Tag'>
                <div className='TagItem'>
                    <div className='HotTag'>
                        <h2>热门标签</h2>
                    </div>
                    <div className='HotTagItem'>
                        {
                            data2.map((item: any, index: any) => {
                                return (
                                    <NavLink to={`/search/${item}`}>
                                        <Button type="default" shape="round" size='large' key={index}>#{item}</Button>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='TagSearch'>
                    <span className='ipt'>
                        <input type="text" placeholder='标签搜寻' />
                        <span className='icon'>
                            <SearchOutlined />
                        </span>
                    </span>
                </div>

            </div>

            <div className='Breadcrumb'>

                <NavLink to='/home'>home</NavLink>
                <span>/Primary</span>

            </div>
            <div className='PrimaryItem'>
                <div className='Aslide'>
                    <div className='mask'>
                        <p>{name}</p>
                        <span>stride.fun</span>
                    </div>
                    <div>
                        <div className='header'>
                            <p>热销</p>
                        </div>

                        <ul className='list-item'>
                            {
                                data3.map((item: any, index: any) => {
                                    return (
                                        <li key={index}>
                                            <h4>
                                                <NavLink to={`/details/${item.id}`}>{item.title}</NavLink>
                                            </h4>
                                            <div className='num'>{item.sale}件</div>

                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
                <div className='PrimaryList'>
                    <div className='header'>
                        <p>今日推荐</p>
                    </div>
                    <PageList name={name} />
                </div>
            </div>
        </div>
    )
}
