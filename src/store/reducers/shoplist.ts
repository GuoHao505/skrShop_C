import { Increment } from '../variable'
import { Action, Shop } from '../../types'
type ShopList = Shop[]
let initState: [] = []
export default function shopList(preState: ShopList = initState, action: Action): ShopList {
    let { type, data } = action
    // console.log('car', type, data);
    switch (type) {
        case Increment:
            return [data, ...preState]
        default:
            return preState
    }

}