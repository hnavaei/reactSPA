import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import ProductItem from "./productItem";
import ReactPaginate from "react-paginate";
import {useProducts} from "../context/ProductsProvider";

const Products = () => {
    const {products, setProducts} = useProducts();
    const [pageNumber, setPageNumber] = useState(1)
    const productPerPage = 2
    const totalPage = Math.ceil(products.length / productPerPage)
    let newOffset = (pageNumber - 1) * productPerPage
    let showProducts = [...products].slice(newOffset, newOffset + productPerPage)

    const handlePageClick = (event) => {
        setPageNumber(Number(event.selected) + 1)
    };

    if (products.length == 0) return (<h2>Not Founding Something Yet</h2>)
    return (
        <div>
            <h3 className={'main-color'}>More Items</h3>
            {showProducts.map(item => <ProductItem key={item.id} {...item}/>)}
            <ReactPaginate pageCount={totalPage}
                           pageRangeDisplayed={productPerPage}
                           previousLabel={'Prev'}
                           nextLabel={'Next'}
                           onPageChange={handlePageClick}
                           className={'pagination'}>

            </ReactPaginate>
        </div>
    )
}

export default Products;
