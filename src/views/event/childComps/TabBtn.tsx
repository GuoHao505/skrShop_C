import React, { useState } from 'react'
import '../../../styles/Event/TabBtn.scss'
import Loading from '../../../components/common/loading'
import { Select } from 'antd';
import { connect } from 'react-redux'
import { navAction1 } from '../../../store/actions'

interface Props {
    navAction1: (data: string) => void,
    list: any
}

const TabBtn: React.FC<Props> = ({ navAction1, list }) => {
    let [show, Setshow] = useState(true);
    let btn = ["All", "鞋类", "服饰", "配件", "儿童专区"];
    let sort = ["全部", "收藏", "趋势", "社论", "销售", "事件"];
    //获取鼠标点击nav的内容
    function siblings(currentNode: any, className: any) {
        var siblingss = []; //用来存放其他的兄弟节点
        var elseLi = currentNode.parentNode.children;
        for (var i = 0, elseLil = elseLi.length; i < elseLil; i++) {
            if (elseLi[i] !== currentNode) {//判断是否是ele节点，是否与触发事件的节点相同
                elseLi[i].classList.remove(className)
                siblingss.push(elseLi[i]);
            }
        }
        // return siblings;
    }
    //获取导航img
    // parent_name:'服饰',start:16,end:18

    let context = (e: any) => {
        siblings(e.target.parentNode, 'btn_bor');
        e.target.parentNode.classList.add('btn_bor');
        Setshow(false)
        navAction1(e.target.innerHTML)
        setTimeout(() => {
            Setshow(true)
        }, 1500)
    }


    const { Option } = Select;



    //获取选择框的内容
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className="tab-btn">
            <ul >
                {
                    btn.map((item, index) => {
                        return (
                            <li onClick={context} className={index === 0 ? 'btn_bor' : ''} key={index}>
                                <button>{item}</button>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="sort">
                <ul >
                    {
                        sort.map((item, index) => {
                            return (<li key={index} onClick={context}> <a>{item}</a></li>)
                        })
                    }
                </ul>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="진행중 1">진행중 이벤트</Option>
                    <Option value="진행중 2">진행중 이벤트</Option>
                </Select>
            </div>
            {!show ? <Loading></Loading> : ''}
        </div>
    )
}

export default connect(
    (state: any) => ({ list: state.event }),//映射状态
    { navAction1 }//映射操作状态的方法
)(TabBtn);
