import { useRoutes, Navigate } from 'react-router-dom'
import Home from '../views/home'
import NotFound from '../views/notFound'
import Primary from '../views/primary';

import About from '../components/common/Fllowing/About'
import Partner from '../components/common/Fllowing/Partner'
import Terms from '../components/common/Fllowing/Trems'
import Privacy from '../components/common/Fllowing/Privacy'
import ServiceCenter from '../components/common/Fllowing/Center'
import Offers from '../components/common/Fllowing/Offers'
import Global from '../components/common/Fllowing/Global'
import Advisory from '../components/common/Fllowing/Advisory'
import ShopCar from '../views/shopcar';
import PayTotal from '../views/payTotal'
// import SubmitOrder from '../views/payTotal/childComps/SubmitOrder'
import SecondDary from '../views/secondary'
import Pop from '../views/pop'
import Best from '../views/best'
import Login from '../views/login'
import Register from '../views/register'
import Search from '../views/search'
import Activity from '../views/search/activity'
import Show from '../views/search/show'
import Product from '../views/search/product'
import Details from '../views/details'
import Event from '../views/event'
import Exclusive from '../views/exclusive'
import MyPage from '../views/mypage'
interface Route {
    path: string;
    element: React.ReactNode;
    children?: Route[]
}

//路由匹配规则 精准匹配 
function Router() {
    let Routes: Route[] = [
        
        {
            path: '*',
            element: (<NotFound></NotFound>),

        },
        {
            path: '/',
            element: (<Navigate to='/home'></Navigate>),
        },
        {
            path: '/home',
            element: <Home />,
           
            // children: [{
            //     path: '/service',
            //     element: <Service />
            // },]
        },
        // 详情
        {
            path: '/details/:id',
           element: <Details/>
        },
        // 购物车
        {
            path: '/shopcar',
            element: <ShopCar/>
        },
        //结算
        {
            path: '/payTotal',
            element: <PayTotal/>
        },
        // {
        //     path: '/submitOrder',
        //     element: <SubmitOrder/>
        // },
        //订单详情
        // {
        //     path: '/orderDetail/:order_id/:status',
        //     element: <OrderDetail/>
        // },
        //支付成功
        // {
        //     path: '/paySuccess',
        //     element: <PaySuccess/>
           
        // },
        // 登录
        {
            path: '/login',
            element: <Login/>
        },

        // 注册
        {
            path: '/register',
            element: <Register/>
           
        },
        {
            // 一级分类界面
            path: '/primary/:name',
            element: <Primary/>
        },

        // 独家的
        {
            path: '/exclusive',
            element: <Exclusive/>
        },
        // POP
        {
            path: '/pop',
            element: <Pop/>
        },
        // Event
        {
            path: '/event',
            element: <Event/>
        },
        // // Best
        {
            path: '/best',
            element: <Best/>
        },
        // // 个人中心
        {
            path: '/mypage',
            element: <MyPage/>
        },
        // 二级数据
        {
            path: "/secondary/:name",
            element: <SecondDary/>
        },
        // 搜索
        {
            path: '/search/:word',
            element: <Search/>,
            children: [
                {
                    path: '/search/:word',
                    element: <Navigate to='product'/>,
                },
                {
                    //产品
                    path: 'product',
                    element: <Product/>
                },
                
              
                    //活动
                {
                    path: 'activity',
                    element:<Activity/>
                },
                    //展示
                {
                    path: 'show',
                    element: <Show/>
                },
            ]
        },

        // 底部路由跳转 
        {
            path: '/about', // 关于我们
            element: <About/>
        },
        {
            path: '/advisory', // 咨询服务
            element: <Advisory/>
        },
        {
            path: '/partner', // 合作伙伴查询
            element: <Partner/>
        },
        {
            path: '/terms', // 服务条款
            element: <Terms/>
        },
        {
            path: '/privacy', // 隐私政策
            element: <Privacy/>
        },
        {
            path: '/serviceCenter', // 服务中心
            element: <ServiceCenter/>
        },
        {
            path: '/offers', // 招聘信息
           element: <Offers/>
        },
        {
            path: '/global', // 全球的
           element: <Global/>
        },
    ]


    return useRoutes(Routes)
}

export default Router