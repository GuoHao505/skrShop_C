import { useState, useEffect,useRef } from 'react';
import './index.scss';
import modify from '../../assets/img/signup/modify.png';
import right from '../../assets/img/signup/right.png';
import success from '../../assets/img/signup/success.png';
import { Button, Checkbox, Form, Input,Col, Row,message } from 'antd';
import { NavLink,useNavigate } from 'react-router-dom';
import { userLogin,userSignUp } from '../../network/userJoin';

const Register = (props) => {
  let duration = props.duration
  let [registerMessage, setRegisterMessage] = useState(['']);
  const iptNumber = useRef()
  const iptNumberBtn = useRef();
  // 倒计时
  const [time, setTime] = useState(duration || 10);
  const [timeId, setTimeId] = useState("");
  // 发送注册请求
  // 返回入参不符 请问问题？？？？
  useEffect(() => {
    // 一进来让获取验证码变为禁用状态
    iptNumberBtn.current.disabled = true;

    if (time < 1) {
      clearInterval(timeId);
      setTime(duration || 10);
    }

  }, [time]);
  const onFinish = (values) => {

    userSignUp(values).then((res)=>{
    
      if(res.code===200){
        message.success('注册成功')
        navigator('/login')
      }else if(res.code===501){
        message.error('用户已注册')
      }else{
        message.error('参数不符')
      }
    })

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // 点击取消 刷新页面 输入的所有内容自动消失
  function btnOneClick() {
    console.log('点击');
    window.location.reload();

  };
  // 点击获取验证码 验证iptNumber是否通过正则

  // 键盘弹起触发 验证内容是否通过正则 通过 取消btn禁用状态，未通过 添加btn禁用状态
  function research() {
    var gz = /^1[3-9][0-9]{9}$/
    var iptval = gz.test(iptNumber.current.input.value);
    iptval ? iptNumberBtn.current.disabled = false : iptNumberBtn.current.disabled = true;
  };

  // 点击iptNumberBtn 开始计时 十秒内添加禁用状态 不可再次点击
  // 点击后 开始计时 同时改变iptNumberBtn文本内容

  function researchBtn() {
   
    setTime((time) => time - 1);
    setTimeId(setInterval(() => setTime((time) => time - 1), 1000));
  }


  return (
    <div className='registerBox' >
      <nav>
        <h1>注册</h1>
        <div className='iconBox'>
          <div className='modifyBox'>
            <img src={modify} alt="" />
          </div>
          <img src={right} alt="" />
          <div className='successBox'>
            <img src={success} alt="" />
          </div>


        </div>
        <div className='iconTextBox'>
          <span className='iconTextBoxSpanOne'>1 信息输入</span>
          <span className='iconTextBoxSpanTwo'>2 注册完成</span>

        </div>
      </nav>
      <div className='hint'>
        <b>如果您注册成为会员，您将获得10％的折扣券,可以立即使用。</b>
        <span>（每个完成自我认证的帐户只能使用一次）</span>
      </div>
      <div className='from' >
        <Form
          name="basic"
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={(values)=>onFinish(values)}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入您的用户名' }]}
          >
            <Input placeholder='请输入您的用户名' />
          </Form.Item>

          <Form.Item label="密码"
            name="password"
            rules={[{ required: true, message: '请输入您的密码' }]}

          >
            <Input.Password placeholder='请输入您的密码' style={{ paddingLeft: '-10px' }} />
          </Form.Item>

          <Form.Item label="邮箱"
            name="email"
            rules={[{ required: true, message: '请您输入邮箱' }]}

          >
            <Input placeholder='请输入您的邮箱' pattern={'^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$'} />

          </Form.Item>
          <Form.Item label="手机号"
            // labelCol={{ span: 3}}
            name="number"
            rules={[{ required: true, message: '请输入您的手机号' }]}
            style={{ position: 'relative' }}

          >
            <Input ref={iptNumber} placeholder='请输入您的手机号' onKeyUp={research} pattern={`^1[3-9][0-9]{9}$`} />

          </Form.Item>
          <Col span={1} >
            <Button ref={iptNumberBtn} onClick={researchBtn} style={{ float: 'left', position: 'absolute', display: 'inline-block', top: '-56px', right: '-2086%' }}>

              {time === duration || time === 0 ? "获取验证码" : `${time}秒后获取`}
            </Button>
          </Col>


          <Form.Item label="验证码"
            name="research"
            rules={[{ required: true, message: '请输入您收到的验证码' }]}
          >
            <Input placeholder='请输入您收到的验证码 ' />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
            <Button style={{ backgroundColor: 'white', color: 'black', marginRight: '20px', width: '150px', height: '50px' }} onClick={btnOneClick}>
              取消
            </Button>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: 'black', marginLeft: '40px', width: '150px', height: '50px', marginBottom: '100px' }}>
              确认
            </Button>
          </Form.Item>
        </Form>

      </div>
    </div>

  );
};

export default Register;
