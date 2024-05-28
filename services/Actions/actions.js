import {Add_to_cart} from "../Constant"
export const addtocart=(data)=>{
    // console.log("action",data)
    return{
       
        type:Add_to_cart,
        data:data
    }
}
export default addtocart;