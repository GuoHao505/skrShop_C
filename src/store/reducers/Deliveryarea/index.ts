import { Detail } from '../../variable';
import { Action } from '../../../types'

type ShopList = boolean 
let initState: boolean = false
export default function Dizhi(preState: ShopList = initState, action: Action): ShopList {
    let { type, data } = action
    // console.log('car', type, data);
    switch (type) {
        case Detail:
            return data
        default:
           return preState
    }

}