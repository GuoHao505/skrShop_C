// 一级分类中的二级分类列表
import React from 'react'
import './index.scss'

 const Select:React.FC = ()=> {

  return (
    <div className='select'>
      <div className="select-select">
        <select id="select-option">
          <option value="">日常的</option>
          <option value="">每周</option>
          <option value="">每月一次</option>
        </select>
      </div>
    </div >
  )
}

export default Select
