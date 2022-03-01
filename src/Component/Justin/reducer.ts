const initialState = {
    data: [],
    search: ""
}

const productsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "UpdateProducts":
            return { ...state, ...action.payload }
        default:
            return { ...state }
    }
}

export default productsReducer;