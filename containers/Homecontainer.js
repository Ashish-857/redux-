import {connect} from "react-redux"
import Home from "../components/Home";
import {addtocart} from '../services/Actions/actions'

const mapStateToProps=state=>({
    cardData:state.cartitems
})

const mapDispatchToProps=dispatch=>({
addtocartHandler:data=>dispatch(addtocart(data))
})

export default connect(mapStateToProps,mapDispatchToProps) (Home);
