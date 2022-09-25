export const ADD = (item)=>({
    type : "ADD_TO_CART",
    payload : item

})

export const REMOVE = (id)=>({
    type : "REMOVE_FROM_CART",
    payload : id

})

export const REMOVE_ONE = (item)=>({
    type : "REMOVE_ONE",
    payload : item

})