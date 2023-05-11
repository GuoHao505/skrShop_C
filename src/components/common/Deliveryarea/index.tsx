import { Modal } from 'antd';
import React, { useState, useEffect, useRef } from 'react';
import './index.scss'
import Sanji from './Sanji';
import { addAddress } from '../../../network/addAddress';
import { message } from 'antd';
import {connect} from 'react-redux'
import {creatDetail} from '../../../store/actions'
// 获取遮罩层显示bone 值为true显示，false隐藏
interface Prop {
    bone?: boolean,
    creatDetail?: any,
    list?:any
}

const Deliveryarea: React.FC<any> = ({ bone = false,creatDetail,list }: Prop) => {
   
 
    // 姓名的value
    const namevaule:any = useRef(null);
    // 电话的value
    const phonevaule:any = useRef(null);
    // 详细地址的value 
    const delvaule: any = useRef(null);
    // 默认地址状态
    const check:any=useRef(null)

    // 存储三级联动的值
    const [areaData, setAreaData] :any= useState({})
    // 回调函数接受地区值
    const handleArea = (area: object) => {
        setAreaData(area)
        
    }

    // 控制遮罩层显示隐藏
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(()=>{
       
        setIsModalOpen(bone)
        
        
    },[bone])
  
  
    // 点击加入购物车  在函数内发起请求添加购物车 是否设置默认值也是在此处发起请求
    const handleOk = () => {
     
        let area=areaData.sheng+'-'+areaData.shi+'-'+areaData.qu+' '+delvaule.current.value
      
        creatDetail(false)
     
        //添加收货地址
        addAddress({
            customer_id:'1',
            name:namevaule.current.value,
            tel:phonevaule.current.value,
            prime: check.current.checked,
            address:area
        }).then((data:any)=>{
            
            if(data.code===200){
                message.success('新增地址成功');
             
            }else{
                message.error('新增地址失败');
            }
        })
        // 点击新增地址后清除输入框的值
        namevaule.current.value='';
        phonevaule.current.value='';
        delvaule.current.value='';
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        creatDetail(false)
     
        
    };

    return (
        <>
            <Modal title="收货地址" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelText={'返回'} okText={'保存地址'}>
                <div className='address_detail'>
                    <div className="info">
                        <div > 收货人
                            <span style={{ color: 'red' }}>*</span>
                            <input placeholder="姓名" type="text" className="ant-input" ref={namevaule} />
                        </div>
                        <div > 手机号码
                            <span style={{ color: 'red' }}>*</span>
                            <input placeholder="手机号码" type="text" className="ant-input" ref={phonevaule} />
                        </div>
                    </div>
                    <div className="address_item">
                        <div > 省/直辖市
                            <span style={{ color: 'red' }}>*</span>
                        </div>
                        <div > 市 <span style={{ color: 'red' }}>*</span>
                        </div>
                        <div > 区/县
                            <span style={{ color: 'red' }}>*</span>
                        </div>
                    </div>
                    <div >
                        <Sanji handleArea={handleArea} />
                    </div>
                    <div className='detail_address'>
                        <div>详细地址
                            <span style={{ color: 'red' }}>*</span>
                        </div>
                        <input placeholder="详细地址" type="text" className="ant-input" ref={delvaule} />
                    </div>
                    <div className="default">
                        <input type="checkbox" id="default" value="1" ref={check}/>
                        <label htmlFor="default">设置为默认地址</label>
                    </div>
                </div>
            </Modal>
        </>
    );
};
// export default Deliveryarea;

export default connect(
    (state: any) => ({ list: state.Dizhi }),//映射状态
    { creatDetail }//映射操作状态的方法
)(Deliveryarea);
