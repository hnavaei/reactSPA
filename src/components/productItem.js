import React from "react";
import {BsPlusCircleFill} from "react-icons/bs";
import {useMyReducer} from "../context/ReducerProvider";

const ProductItem = ({id, title, url}) => {
    const {addCart, carts} = useMyReducer();

    return (
        <div className={'product'} onClick={() => addCart({id, title, url})}>
            <div className="product-img">
                <img src={url} alt={title}/>
            </div>
            <div className="product-info">
                <h4 className={'product-title'}>{title}</h4>
                <small className={'product-subtitle'}>Original Taste</small>
            </div>
            <BsPlusCircleFill className={'icon icon-plus'}/>
        </div>
    )
}

export default ProductItem