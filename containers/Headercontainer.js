import {connect} from "react-redux"
import Header from "../components/Header";


const mapStateToProps=state=>({
    cardData:state.cartitems
})

const mapDispatchToProps=dispatch=>({

})

export default connect(mapStateToProps,mapDispatchToProps) (Header);
