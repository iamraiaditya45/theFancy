const initialState = {
    cartItems: [],
}

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "UpdateCart":
            return { ...state, ...action.payload }
        case "EmptyCart":
            return { ...state, ...{ cartItems: [] } }
        default:
            return { ...state }
    }

}
export default cartReducer;