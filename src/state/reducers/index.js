// jitne bhi reducers hain unhe ek me combine krke as a single reducer export krna hota hai
import {combineReducers} from "redux";
import Reduceramt from "./Reduceramt";
const reducers=combineReducers({
    amount:Reduceramt//agar ek se zyada toh comma se separate kardo.  
})
export default reducers;