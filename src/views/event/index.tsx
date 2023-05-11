import React from 'react'
import { connect } from 'react-redux'
import Carousels from './childComps/Carousels'
import TopTitle from '../../components/common/title'
import CetNav from './childComps/CetNav'
import HotKeyWord from './childComps/HotKeyWord'
import TabBtn from './childComps/TabBtn'
import Thumnail from './childComps/Thumnail'
import { createIncrementAction } from '../../store/actions'


const Event: React.FC = (props) => {
 
    return (
        <div>
            <TopTitle>
                <p>EVENT</p>
            </TopTitle>
            <Carousels></Carousels>
            <CetNav></CetNav>
            <HotKeyWord></HotKeyWord>
            <TabBtn></TabBtn>
            <Thumnail></Thumnail>
        </div>
    )
}
export default connect(
    (state: any) => ({ list: state.shopList }),//映射状态
    { createIncrementAction }//映射操作状态的方法
)(Event);