import { useMemo, useState, useEffect } from 'react'
import Magnifier from './Magnifier'
import { getShopById } from '../../network/getShopById'
import { useParams } from 'react-router-dom'
import './index.scss'


function Details() {
    //数据渲染
    let { id }: any = useParams();
    let [data, staData] = useState<any[]>([])
    let [imges, staImges] = useState<any[]>([])
    useEffect(() => {
        getShopById(id).then((res: any) => {
           
            let imges = JSON.parse(res.data[0].imgs)
      
            staImges(imges)
        })

    }, [])
    return (
        <div className='details'>
            <Magnifier id={id} />
          
        </div>
    )
}

export default Details