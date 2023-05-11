import React,{ useState }  from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,message } from 'antd';
import { userLogin } from '../../network/userJoin';
import '../register/index.scss'
import './index.scss';

import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    userLogin(values).then((res:any)=>{
     
      if(res.code===200){
        message.success('登录成功')
        navigate('/home')        
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('id',res.data.userInfo
        .id)
      }else{
        message.error('用户名或密码不正确')
      }
    })
  };

  function btnTwofn() {
    navigate('/register')

  }
  return (
    <div className='LoginBox'>
      <div className='registerBox'>
        <nav>
          <h1>登录</h1>
        </nav>
        <main>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={(values:any)=>onFinish(values)}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 13 }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入您的用户名' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入您的密码' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item className='checkboxForm'>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox style={{ fontSize: '16px' }}>记住账号</Checkbox>
              </Form.Item>

            </Form.Item>
            <div className='btnBox' style={{ marginLeft: '15%' }}>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{ backgroundColor: 'black' }}>
                  登录
                </Button>

                <div className='spanBox'>
                  <span>找回用户名</span>
                  <span style={{ margin: '0 10px' }}>|</span>
                  <span >忘记密码</span>
                </div>
              </Form.Item>
            </div>
          </Form>
        </main>
        <div className='otherLogin'>
          <h3>第三方登录</h3>
          <img src={require('../../assets/img/login/icon_QQ.png')} alt="" />
          <span >QQ</span>
          <span>|</span>
          <img src={require('../../assets/img/login/wchat.png')} alt="" />
          <span>微信</span>
        </div>
        <div className='flootBox'>
          <div>
            <li>还不是SKR-SHOP成员？</li><br />
            <span>如果您注册成为会员，您将获得10％的折扣券。</span>
            <Button onClick={btnTwofn} type="primary" htmlType="submit" className="login-form-button" style={{ backgroundColor: '#7d7d7d', height: '50px', marginTop: '30px', border: 'none' }}>
              注册
            </Button>
          </div>
          <div style={{ float: 'right' }}>
            <li style={{ marginTop: '30px' }}>需要非会员订单/交货查询吗？</li>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ backgroundColor: '#7d7d7d', height: '50px', marginTop: '30px', border: 'none' }}>
              非会员订单查询
            </Button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;





