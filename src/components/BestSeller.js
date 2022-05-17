import React from "react";
import {BsPlusCircleFill} from "react-icons/bs";
import { HiMinus } from "react-icons/hi";

const BestSeller = () => {
    return (
       <div style={{alignSelf:'start'}}>
           <h2 className={'flex'}>Best Sellers  <button className={'btn-minus'}><HiMinus className={'icon icon-minus'}/></button></h2>
           <div className={'flex'}>
               <div className={'product-seller-container'}>
                   <div className="product-seller-img">
                       <img src={require('../assets/images/istockphoto-185239535-612x612.jpg')} alt=""/>
                   </div>
                   <div className="product-seller-info">
                       <h3 className={'product-seller--title'}>Lotus Jar</h3>
                       <small className={'product-seller--subtitle'}>Green Fruit Jelly</small>
                       <p>
                           Lorem ipsum dolor sit amet Assumenda ipsum itaque suscipit.
                           debitis distinctio fugiat omnis quasi.
                       </p>
                       <h4 className={'product-seller--price'}>4.00$</h4>
                       <BsPlusCircleFill className={'icon icon-seller-plus'}/>
                   </div>

               </div>
               <div className={'product-seller-container'}>
                   <div className="product-seller-img">
                       <img src={require('../assets/images/istockphoto-185239535-612x612.jpg')} alt=""/>
                   </div>
                   <div className="product-seller-info">
                       <h3 className={'product-seller--title'}>Lotus Jar</h3>
                       <small className={'product-seller--subtitle'}>Green Fruit Jelly</small>
                       <p>
                           Lorem ipsum dolor sit amet Assumenda ipsum itaque suscipit.
                           debitis distinctio fugiat omnis quasi.
                       </p>
                       <h4 className={'product-seller--price'}>4.00$</h4>
                       <BsPlusCircleFill className={'icon icon-seller-plus'}/>
                   </div>

               </div>
           </div>
       </div>
    )
}

export default BestSeller