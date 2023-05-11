import { Show, Hide,Nav1,Nav2} from '../../variable'
import { Action } from '../../../types'
type State = boolean
let initState: boolean = true
export default function event(preState: State = initState, action: Action) {
    let { type, data } = action
    switch (type) {
        case Nav1:
            return data
        case Nav2:
            return data
        default:
            return 'All'
    }

}