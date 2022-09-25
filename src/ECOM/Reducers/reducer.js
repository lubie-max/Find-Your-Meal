const INIT_STATE = {
    itemsInCart : []
}

export const  cartReducer = ( state= INIT_STATE , action)=> {
    switch (action.type) {
        case "ADD_TO_CART":
            const itemID = state.itemsInCart.findIndex((item)=> item.id === action.payload.id)
            console.warn(itemID)

            if(itemID >= 0){
                state.itemsInCart[itemID].qnt +=1
                // return state
                

            }
            else{
                return{
                    ...state,
                    itemsInCart : [ ...state.itemsInCart, action.payload ]
                
                }
            }
          

        case "REMOVE_FROM_CART":
            const filterData = state.itemsInCart.filter((elm)=> elm.id !== action.payload )
            console.warn(filterData)
            return{
                ...state,
                itemsInCart : filterData
            }
            
        case "REMOVE_ONE":
           const ItemID = state.itemsInCart.findIndex((item) => item.id === action.payload.id)  

             if (state.itemsInCart[ItemID].qnt > 1){
              const decQnt = state.itemsInCart[ItemID].qnt -= 1
              console.log(decQnt)

                 return {
                    ...state,
                    itemsInCart: [...state.itemsInCart ]
                 }
             }
             break;        
        default:
            return state
            
    }
}