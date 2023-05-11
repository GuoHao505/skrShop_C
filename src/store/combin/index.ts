import { combineReducers } from 'redux'
import shopList from '../reducers/shoplist'
import Dizhi from '../reducers/Deliveryarea/index';
import event from '../reducers/event/index';


export default combineReducers({
    shopList,
    event,
    Dizhi,

});