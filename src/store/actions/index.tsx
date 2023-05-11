import { Increment, Decrement,Detail,Nav1,Nav2,Add } from '../variable'


export const createIncrementAction = (data: any) => ({ type: Increment, data })

export const createDecrementAction = (data: any) => ({ type: Decrement, data })

//导航栏状态
export const navAction1 = (data: any) => ({ type: Nav1, data })
export const navAction2 = (data: any) => ({ type: Nav2, data })

//地址显示隐藏
export const creatDetail = (data: any) => ({ type: Detail, data })

// 添加购物车
export const addShop = (data: any) => ({ type: Add, data })
