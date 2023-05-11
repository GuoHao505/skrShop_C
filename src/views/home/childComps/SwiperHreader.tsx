import { getSpu } from "../../../network/getHomeList"
import Swiper from '../../../components/common/swiper'

export default function SwiperHreader() {

    return (
        <Swiper width={'100%'} type={getSpu} height={'600px'} dots={true} />

    )
}
