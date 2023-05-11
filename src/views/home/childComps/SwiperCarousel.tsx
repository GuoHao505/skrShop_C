
import Swiper from '../../../components/common/swiper'

export default function SwiperCarousel() {

   

    return (
    
            <Swiper  name={'跑鞋'} start={20} end={28} width={'90%'} imgHeight={'100%'} className={'list'} slidesToShow={5} slidesToScroll={5} text={true}/>
    )
}
