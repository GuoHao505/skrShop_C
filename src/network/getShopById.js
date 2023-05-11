 import axios from "../utils/request.js";
//  export const getShopById = (options) => axios.post('/store/getSku',options)
//  export const getShopById2 = (options) => axios.post('/store/getSpu',options)
export const getShopById2 = (options)=>{
    return axios({
         method:'post',
         url:'/store/getSpu',
         data:options
     })
 }
 export const getShopById = (spu_id)=>{
     return axios({
          method:'post',
          url:'/store/getSku',
          data:{
             spu_id
          }
      })
  }
 