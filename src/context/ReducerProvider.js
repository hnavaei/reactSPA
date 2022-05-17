import React, {createContext, useReducer} from "react";

const ReducerContext = createContext()

const addToCart = (state, product) => {
    let carts = [...state]
    const curItemIndex = carts.findIndex((item) => item.title === product.title);

    if (curItemIndex == -1) {
        carts.push({...product, quantity: 1});
    } else {
        const updateItem = {...carts[curItemIndex]};
        updateItem.quantity++;
        carts[curItemIndex] = updateItem;
    }
    return [...carts]
}

const removeFromCart = (state, productId) => {
    let carts = [...state]
    let newCarts = carts.filter(cartItem => cartItem.id != productId)
    return [...newCarts]
}

const actionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return addToCart(state, action.payload)
        case 'REMOVE':
            return removeFromCart(state, action.payload)
        default:
            return state
    }
}

const ReducerProvider = ({children}) => {
    const [state, dispatch] = useReducer(actionReducer, [])

    const addCart = (product) => {
        dispatch({
            type: 'ADD',
            payload: product
        })
    }

    const removeCart = (productId) => {
        dispatch({
            type: 'REMOVE',
            payload: productId
        })
    }

    return <ReducerContext.Provider
        value={{addCart, removeCart, carts: state}}>
        {children}
    </ReducerContext.Provider>
}

export const useMyReducer = () => {
    return React.useContext(ReducerContext)
}


export default ReducerProvider