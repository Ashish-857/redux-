const Home=(props)=>{
    console.log("Home",props.cardData)
    return(
        <>

        <div className="cart-1">
        <div className="cart-wrapper">
<div className="img-wrapper item">
    <img src="data:image/jpeg;base64,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"/>
</div>
<div className="text-wrapper item">
    <span>iphone</span>
    <span>Price:$1000.00</span>
</div>
<div className="btn-wrapper item">
    <button onClick={()=>props.addtocartHandler({price:1000,name:"i phone 11"})}>Add to cart</button>
</div>
        </div> 
        <div className="cart-wrapper">
<div className="img-wrapper item">
    <img src="data:image/jpeg;base64,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"/>
</div>
<div className="text-wrapper item">
    <span>iphone</span>
    <span>Price:$1000.00</span>
</div>
<div className="btn-wrapper item">
    <button onClick={()=>props.addtocartHandler({price:800,name:"i phone 15"})}>Add to cart</button>
</div>
        </div>
        </div>
        </>
       
    )
}
export default Home;