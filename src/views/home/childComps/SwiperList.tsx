import Swiper from '../../../components/common/swiper'
export default function SwiperList() {

    return (

        <Swiper centerMode={true} name={'板鞋'} start={20} end={28} width={'90%'} imgHeight={'100%'} className={'list'} slidesToShow={3} infinite={false} text={true}/>

    )
}
