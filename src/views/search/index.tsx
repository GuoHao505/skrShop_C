import React, { useState, useEffect } from 'react'
import getSearch from '../../network/getSearch'
import { useParams, NavLink,Routes,Route } from 'react-router-dom'
import './index.scss'
import Product from './product'
import { Outlet } from 'react-router-dom'
export default function Search() {
    let { word }:any = useParams(); 
 
    let [list, setlist] = useState([]);
    useEffect(() => {
        getSearch(word).then(res => {
            list = res.data
            setlist(list)
        })
    }, [word])

    return (
        <div className='search'>
            <div className='searchRes'>
                <section>
                    <span>'{word}'有</span>
                    <span style={{ color: 'rgb(153,199,179)' }}>{list.length}</span>
                    <span>个搜索结果</span>
                </section>
            </div>

            <div className='search-nav'>
                
                <nav>
                    <NavLink to={`product`}><span className={word}>产品（{list.length}）</span></NavLink>
                    <NavLink to='activity'><span  className={'板鞋'}>活动（0）</span></NavLink>
                    <NavLink to='show'>买家秀（120）</NavLink>
                </nav>
                <Outlet></Outlet> 
               {/* <Product word></Product> */}
             
            </div>
        </div>
    )
}

