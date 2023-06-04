/* deposit money ek amount le rha hai. or return kr rha hai dispatch jo khud ek function hai or ye
function call ho rha hai*/
export const depositMoney=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"deposit",
            payload:amount
        });
    }
}
export const withdrawMoney=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"withdraw",
            payload:amount
        });
    }
}