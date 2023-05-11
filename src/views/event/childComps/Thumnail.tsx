import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getImg } from '../../../network/getImg'
import '../../../styles/Event/Thumnail.scss'
import { Pagination, PaginationProps } from 'antd';
import { useNavigate } from 'react-router-dom'
interface Props {
    list: any
}
const Thumnail: React.FC<Props> = ({ list = 'All' }) => {
    let navigate = useNavigate()
    let [datas, setDates] = useState([])
    let [current, setCurrent] = useState(1);
    const onChange: PaginationProps['onChange'] = page => {
        setCurrent(page);
    };
    let nav = (id: number) => {
        navigate(`/detail/${id}`)
    }
    useEffect(() => {
        console.log(list === 'All', list);
        if (list === 'All') {
            let p1 = getImg({ parent_name: "鞋类", start: current, end: current + 2 })
            let p2 = getImg({ parent_name: "服饰", start: current, end: current + 2 })
            let p3 = getImg({ parent_name: "配件", start: current, end: current + 1 })
            let p4 = getImg({ parent_name: "儿童专区", start: current, end: current + 1 })
            Promise.all([p1, p2, p3, p4]).then((data) => {
                let arr: any = [];
                data.forEach((item: any, index) => {
                    arr = [...arr, ...item]
                })
                setDates(arr);
                console.log(arr);
            })
        } else {
            getImg({ parent_name: list, name: '', start: current, end: current + 9 }).then((data: any) => {
                console.log(data);
                setDates(data);
            });
        }
    }, [list, current])
    return (
        <div className='thumnail'>
            <div className='issue_lst'>
                <ul>
                    {
                        datas.map((item: any, index) => {
                            return (
                                <li key={index} onClick={() => { nav(item.id) }}>
                                    <a>
                                        <img src={item.img} alt="" />
                                        <p className="multiline">{item.title}</p>
                                    </a></li>
                            )
                        })
                    }

                </ul>
            </div>
            <div style={{ textAlign: 'center' }} >
                <Pagination current={current} onChange={onChange} total={100} />
            </div>
        </div>

    )
}
export default connect(
    (state: any) => ({ list: state.event }),//映射状态
    {}//映射操作状态的方法
)(React.memo(Thumnail));