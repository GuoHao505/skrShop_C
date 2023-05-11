import { useEffect, useState } from 'react'
import { getTypeOneList } from '../../../network/getList'
import { getTypeOne } from '../../../network/getNav';
import AnCar from './AnCar';
export default function TypeList() {

    const [type, setType]: any = useState([])
    useEffect(() => {

        getTypeOne().then((res: any) => {
          
            setType([...res.data])

        })

    }, [])
    return (
        <>
            {
                type.map((item: any, index: number) => {
                    return (
                        <div className='TypeList' key={index}>
                            <div className='type'>
                                <h2>{item}</h2>
                                <p>MORE</p>
                            </div>
                            <div className='AnCard'>
                                <div className='AnCard'>
                                    <AnCar name={`${item}`} end={7} width={'180px'} one/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}
