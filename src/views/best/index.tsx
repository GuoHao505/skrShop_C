import React from 'react'
// import '../../../../styles/index.scss'
import './index.scss'
import TabItem from './TabItem'

const Container:React.FC = ()=> {
  return (
    <div id='container'>
      {/* 头部 */}
      <div className="container-title">
        <p>最好的</p>
      </div>
      {/* 内容 */}
      <div className="container-topseller">
        {/* 一级分类 */}
        <TabItem></TabItem>
      </div>
      

    </div>
  )
}

export default Container
