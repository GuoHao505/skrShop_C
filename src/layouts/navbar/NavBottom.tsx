import  { useState, useEffect } from 'react'
import { getTypeOne, getTypeTwo } from '../../network/getNav';
import { getImg } from '../../network/getImg';
import { NavLink } from 'react-router-dom';

export default function NavBottom() {
    const [typeone, setTypeOne]: any = useState([])
    const [typetwo, setTypeTwo]: any = useState([])
    const [list, setList]: any = useState([])
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        getTypeOne().then((res: any) => {
            setTypeOne([...res.data])
        })
    }, [])
    function mouseMove(name: string) {
            getTypeTwo(name).then(res => {
               
                setTypeTwo([...res.data])
            })
            getImg({parent_name:`${name}`,start:16,end:18}).then((res: any)=>{
               
                setList([...res])
            })
            setFlag(true)
        
    }
    return (
        <div>
            <div id='bottom' >
                <div className='conent'>
                    <ul className='left' onMouseLeave={() => setFlag(false)}>
                        {
                            typeone.map((item: any, index: number) => {
                                return (
                                    <li key={index} onMouseMove={() => mouseMove(item)} >
                                        <NavLink to={`/primary/${item}`}>{item}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className='right'>
                        <li> 
                            <NavLink to='/pop'>POP</NavLink>
                        </li>
                        <li>
                            <NavLink to='/exclusive'>EXCLUSIVE</NavLink>
                        </li>
                        <li>
                            <NavLink to='/event'>EVENT</NavLink>
                        </li>
                        <li>
                            <NavLink to='/best'>BEST</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='eng' style={flag ? { display: 'block' } : { display: 'none' }} onMouseLeave={() => setFlag(false)} onMouseMove={() => setFlag(true)}>
                <div className='conent'>
                    <ul className='left'>
                        {
                            typetwo.map((item: any, index: number) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={`/secondary/${item}`}>
                                            {item}
                                        </NavLink>
                                        
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='right'>
                        <ul>
                            {
                                list.map((item: any,index:number) => {
                                    return (
                                        <li key={index}>
                                            <img src={item.img} alt="" />
                                            <p>{item.title}</p>

                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}
