
import NavSearch from './NavSearch';
import { UserAddOutlined, LoginOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

export default function NavBarTop() {
  let token=localStorage.getItem('token');

  const navigata=useNavigate()
  function loginout(){
    let comfig=window.confirm('是否退出登录')
    if(comfig){
      navigata('/home')
      localStorage.setItem('token','')
      localStorage.setItem('id','')
    }
  }

  function shopcar(){
    if(!token){
      message.error('请先登录')
      navigata('/login')
    }else{
      navigata('/shopcar')
    }
  }

  return (
    <div className='nav'>
      <div className='navs'>
        <NavLink to='/home'>
          <img src={require('../../assets/img/logo/log.png')} alt="" />
        </NavLink>

      </div>
      <NavSearch />
      <div className='icons'>
        {
          token ?
            <>
              <div className='icon'>
                <a onClick={loginout}>
                  <LoginOutlined style={{ fontSize: '20px', color: '#000000A6' }} />
                  <p>LOGINOUT</p>
                </a>
              </div>
              <div className='icon'>
                <NavLink to='/mypage'>
                  <UserAddOutlined style={{ fontSize: '20px', color: '#000000A6' }} />
                  <p>MY</p>
                </NavLink>
              </div>
              
            </>
            :
            <>
            <div className='icon'>
              <NavLink to='/register'>
                <UserAddOutlined style={{ fontSize: '20px', color: '#000000A6' }} />
                <p>加入</p>
              </NavLink>
            </div>
            <div className='icon'>
              <NavLink to='/login'>
                <LoginOutlined style={{ fontSize: '20px', color: '#000000A6' }} />
                <p>登录</p>
              </NavLink>
            </div>
            
          </>
        
        }
      
        <div className='icon'>
          <a onClick={shopcar}>
            <ShoppingCartOutlined style={{ fontSize: '20px', color: '#000000A6' }} />
            <p>0</p>
          </a>

        </div>

      </div>
    </div>
  )
}
