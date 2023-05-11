
import AnCar from './AnCar';
import Swiper from '../../../components/common/swiper'
export default function SwiperCarousel() {

    return (
        <>
            <Swiper name={'篮球鞋'} start={0} end={8} swiperWidth={'40%'}  height={'200px'} dots={true} />
            <div className='AnCard'>
                <AnCar name={'篮球鞋'} end={10} width={'200px'}/>
            </div>
        </>
    )
}
