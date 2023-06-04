import React from "react";
import {useDispatch} from "react-redux";
//import {actionCreators} from "./state/index";
//way
import {bindActionCreators} from "redux";
//const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);{dispatch(actionCreators.withdrawMoney(200))}={withdrawMoney(200)}
const Shop=()=>{
    const dispatch=useDispatch();
    return(
        <>
            <button className="btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(200))}}>-</button>
            Add to cart!
            <button className="btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(200))}}>+</button>
        </>
    );
}
export default Shop;