import { useEffect, useState } from 'react'
import { getTypeOneList, getTypeTwoList } from "../../../network/getList"
import { NavLink } from 'react-router-dom'
export default function AnCar(props: any) {
    const { width, name, start = 0, end = 100, one } = props
    const [data, setData]: any = useState([])
    useEffect(() => {

        one ? getTypeOneList(name).then((res: any) => {
            let arr = res.res.slice(start, end)
            setData([...arr])
        })
            : getTypeTwoList(name).then((res: any) => {
                let arr = res.data.slice(start, end)
                setData([...arr])
            })
    }, [])

    return (
        <>
            {
                data.map((item: any, index: number) => {
                    return (
                        <div key={index} className='card' style={{ width: width }}>
                            <NavLink to={`/details/${item.id}`}>
                                <img src={item.img} alt="" />
                                <h2>{item.title}</h2>
                                <p>www.stride.fun</p>
                            </NavLink>

                        </div>
                    )
                })
            }
        </>
    )
}
