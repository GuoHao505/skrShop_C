// import React, { useEffect, useState } from 'react';
// import { getTypeTwoList } from '../../../network/getList';
import Swiper from '../../../components/common/swiper'
// import { Swiper } from 'tdesign-react';
// import { Item } from 'rc-menu';


// const { SwiperItem } = Swiper;

export default function SwiperColor() {
    // const [data, setData]: any = useState([])
    // useEffect(() => {
    //     getTypeTwoList('休闲鞋').then((res: any) => {
    //         console.log(res)
    //         let arr=res.data.slice(23,32)
    //         setData([...arr])
    //     })
    // })

    return (

        <Swiper centerMode={true} name={'休闲鞋'} start={23} end={32} width={'100%'} imgHeight={'350px'} imgWidth={'350px'} className={'list1'} slidesToShow={3} centerPadding={'100px'} slidesToScroll={2} text={true}/>

        // <div className="tdesign-demo-block--swiper">
        //     <Swiper type={'card'} height={280}>
        //         {
        //             data.map((item: any, index: number) => {
        //                 return (
        //                     <SwiperItem>
        //                         <div className="demo-item" > <img src={item.img} alt="" style={{width:'300px'}}/>
        //                         </div>
        //                     </SwiperItem>
        //                 )
        //             })

        //         }
                /* <SwiperItem>
                <div className="demo-item" > <img src="https://img.fishfay.com/shopgoods/1/122028899/zt-122028899/b0fef3c07385ee4782acce93f0036a90.jpg" alt=""/></div>
                
              </SwiperItem>
              <SwiperItem>
              <div className="demo-item" > <img src="https://img.fishfay.com/shopgoods/1/122028899/zt-122028899/b0fef3c07385ee4782acce93f0036a90.jpg" alt=""/></div>
                

              </SwiperItem>
              <SwiperItem>
              <div className="demo-item"  > <img src="https://img.fishfay.com/shopgoods/1/122028899/zt-122028899/b0fef3c07385ee4782acce93f0036a90.jpg" alt=""/></div>
                
              </SwiperItem>
              <SwiperItem>
               
              <div className="demo-item"  > <img src="https://img.fishfay.com/shopgoods/1/122028899/zt-122028899/b0fef3c07385ee4782acce93f0036a90.jpg" alt=""/></div>
                
              </SwiperItem>
             */
            // </Swiper>
        // </div>
    )
}
