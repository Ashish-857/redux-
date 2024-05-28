import { Add_to_cart } from "../Constant";

 const initialState={
    cardData:[]
 }
 export default function cartitems(state=[],action){

switch (action.type){
  case Add_to_cart:
    // console.log("reducer",action)
    return[
...state,
{cardData: action.data

    } ]

    default:
        return state
}


}