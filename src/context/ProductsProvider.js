import React, {useState, createContext, useEffect} from "react";

const url = "https://mocki.io/v1/357f92ef-ea10-426a-bf6a-19f0ed6a71f7";

const ProductsContext = createContext()

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const fetchData = async () => {
        const response = await fetch(url)
        const fetchProducts = await response.json()
        setProducts(fetchProducts)
    }

    useEffect(() => {
        try {
            fetchData()
        } catch (error) {
            alert(error)
        }
    }, [])

    return <ProductsContext.Provider value={{products, setProducts, fetchData}}>
        {children}
    </ProductsContext.Provider>
}

export const useProducts = () => {
    return React.useContext(ProductsContext)
}

export default ProductsProvider